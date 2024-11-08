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
import ProductCard from "@/components/ProductCard";
import TextMarkdown from "@/components/TextMarkdown";

export default function Chat() {
  const {
    messages,
    addToolResult,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = useChat({
    maxToolRoundtrips: 1,
    onToolCall({ toolCall }) {
      setToolCall(toolCall.toolName);
    },
    onError: () => {
      toast.error("You've been rate limited, please try again later!");
    },
    api: "/api/chat",
  });
  console.log("🚀 ~ Chat ~ messages:", messages);

  const [toolCall, setToolCall] = useState<string | undefined>();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [prevMessage, setPrevMessage] = useState<string | undefined>();
  const [dataReady, setDataReady] = useState(false);
  const [TwoLoading, setIsLoading] = useState(true);

  // Agregar useEffect para escuchar messages
useEffect(() => {
  if (messages.length > 0) {
    const lastMessage = messages[messages.length - 1];
    
    // Si el último mensaje es del asistente y tiene productos o richText
    if (lastMessage.role === 'assistant' && 
       (recommendedProducts.length > 0 || richText)) {
      setDataReady(true);
      setIsLoading(false);
    } else {
      setDataReady(false);
    }
  }
}, [messages]);
  // Memoize the user query
  const userQuery = useMemo(() => {
    return messages.filter((m) => m.role === "user").slice(-1)[0];
  }, [messages]);


  const recommendedProducts = useMemo(() => {
    const assistantMessages = messages.filter((m) => m.role === "assistant");
    
    if (assistantMessages.length === 0) return [];
    
    const lastAssistantMessage = assistantMessages[assistantMessages.length - 2];
    if (!lastAssistantMessage?.toolInvocations) return [];
  
    return lastAssistantMessage.toolInvocations
      .flatMap((invocation: any) => invocation?.result?.products || [])
      .filter(Boolean);
  }, [messages]);

  const richText = useMemo(() => {
    const assistantMessages = messages.filter((m) => m.role === "assistant");

    if (assistantMessages.length > 0) {
      const lastAssistantMessage =
        assistantMessages[assistantMessages.length - 2];
      console.log(
        "🚀 ~ richText ~ lastAssistantMessage:",
        lastAssistantMessage
      );

      if (lastAssistantMessage?.toolInvocations) {
        const richTextContent = lastAssistantMessage.toolInvocations.flatMap(
          (invocation: any) => invocation?.result?.richText
        );

        if (richTextContent.length > 0) {
          const { introduction, conclusion } = richTextContent[0];
          return { introduction, conclusion };
        }
      }
    }
    return null;
  }, [messages]);

  // Memoize current tool call
  const currentToolCall = useMemo(() => {
    const tools = messages?.slice(-1)[0]?.toolInvocations;
    return tools && toolCall === tools[0].toolName
      ? tools[0].toolName
      : undefined;
  }, [toolCall, messages]);

  // Memoize awaiting response
  const awaitingResponse = useMemo(() => {
    return (
      isLoading &&
      currentToolCall === undefined &&
      messages.slice(-1)[0]?.role === "user"
    );
  }, [isLoading, currentToolCall, messages]);

  // Expand the component only if a new message is received
  useEffect(() => {
    if (messages.length > 0 && prevMessage !== messages.slice(-1)[0]?.content) {
      setIsExpanded(true);
      setPrevMessage(messages.slice(-1)[0]?.content);
    }
  }, [messages, prevMessage]);

  //   const lastMessage = messages[messages.length - 1]?.content;
  // const [explanation, productList] = lastMessage?.split("\n---\n");
  // console.log("🚀 ~ Chat ~ productList:", productList)
  // console.log("🚀 ~ Chat ~ explanation:", explanation)

  // Solución 1: Envolver TextMarkdown en useMemo si richText cambia frecuentemente
  const introMarkdown = useMemo(
    () => <TextMarkdown message={richText?.introduction} />,
    [richText?.introduction]
  );

  const conclusionMarkdown = useMemo(
    () => <TextMarkdown message={richText?.conclusion} />,
    [richText?.conclusion]
  );

  return (
    <div className="flex justify-center items-start sm:pt-16 min-h-[300px] w-full dark:bg-neutral-900 px-4 md:px-0 py-4">
      <div className="flex flex-col items-center w-full max-w-[800px]">
        <motion.div
          animate={{
            minHeight: isExpanded ? 200 : 0,
            padding: isExpanded ? 12 : 0,
          }}
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
                placeholder="Escribe tu consulta..."
                onChange={handleInputChange}
              />
            </form>

            {TwoLoading && !dataReady && awaitingResponse && (
  <div className="mt-4">
    <Loading tool="getInformation" />
  </div>
)}


            {/* <AnimatePresence>
              {lastAssistantMessage && (
                <AssistantMessage
                  key={lastAssistantMessage.id}
                  message={lastAssistantMessage}
                />
              )}
            </AnimatePresence> */}

            <AnimatePresence>{introMarkdown}</AnimatePresence>
            {recommendedProducts.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 mb-6">
                {recommendedProducts.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            )}
            <AnimatePresence>{conclusionMarkdown}</AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
