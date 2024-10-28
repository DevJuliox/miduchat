"use client";

import { Input } from "@/components/ui/input";
import { Message } from "ai";
import { useChat } from "ai/react";
import { useEffect, useMemo, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import AssistantMessage from "@/components/AssistantMessage";
import Loading from "@/components/Loading";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    maxToolRoundtrips: 4,
    onToolCall({ toolCall }) {
      setToolCall(toolCall.toolName);
    },
    onError: () => {
      toast.error("You've been rate limited, please try again later!");
    },
  });

  const [toolCall, setToolCall] = useState<string | undefined>();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [prevMessage, setPrevMessage] = useState<string | undefined>();

  // Memoize the user query
  const userQuery = useMemo(() => {
    return messages.filter((m) => m.role === "user").slice(-1)[0];
  }, [messages]);

  // Memoize the last assistant message
  const lastAssistantMessage = useMemo(() => {
    return messages.filter((m) => m.role !== "user").slice(-1)[0];
  }, [messages]);

  // Memoize current tool call
  const currentToolCall = useMemo(() => {
    const tools = messages?.slice(-1)[0]?.toolInvocations;
    return tools && toolCall === tools[0].toolName ? tools[0].toolName : undefined;
  }, [toolCall, messages]);

  // Memoize awaiting response
  const awaitingResponse = useMemo(() => {
    return isLoading && currentToolCall === undefined && messages.slice(-1)[0]?.role === "user";
  }, [isLoading, currentToolCall, messages]);

  // Expand the component only if a new message is received
  useEffect(() => {
    if (messages.length > 0 && prevMessage !== messages.slice(-1)[0]?.content) {
      setIsExpanded(true);
      setPrevMessage(messages.slice(-1)[0]?.content);
    }
  }, [messages, prevMessage]);

  return (
    <div className="flex justify-center items-start sm:pt-16 min-h-screen w-full dark:bg-neutral-900 px-4 md:px-0 py-4">
      <div className="flex flex-col items-center w-full max-w-[800px]">
        <motion.div
          animate={{ minHeight: isExpanded ? 200 : 0, padding: isExpanded ? 12 : 0 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className={cn(
            "rounded-lg w-full",
            isExpanded ? "bg-neutral-200 dark:bg-neutral-800" : "bg-transparent"
          )}
        >
          <div className="flex flex-col w-full justify-between gap-2">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                className="bg-neutral-100 text-base w-full text-neutral-700 dark:bg-neutral-700 dark:placeholder:text-neutral-400 dark:text-neutral-300"
                minLength={3}
                required
                value={input}
                placeholder="Ask me anything..."
                onChange={handleInputChange}
              />
            </form>

            {isLoading && (
              <div className="mt-4">
                <Loading tool="getInformation" />
              </div>
            )}

            <AnimatePresence>
              {lastAssistantMessage && (
                <AssistantMessage key={lastAssistantMessage.id} message={lastAssistantMessage} />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
