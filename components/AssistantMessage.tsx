import React from "react";
import { Message } from "ai";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

// Memorizar el componente para evitar renderizados innecesarios
const AssistantMessage = React.memo(({ message }: { message: Message | undefined }) => {
  if (!message || !message.content) return null;

  // Plantilla personalizada para los videos
  const components:any = {
    ol: ({ children }: { children: React.ReactNode }) => (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {children}
      </div>
    ),
    li: ({ children }: { children: React.ReactNode }) => (
      <div className="flex flex-col rounded-lg">
        {children}
      </div>
    ),
    img: ({ src, alt }: { src?: string; alt?: string }) => (
      <img
        src={src}
        alt={alt}
        className="w-full h-30 object-cover rounded-lg shadow"
      />
    ),
    a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline text-sm"
      >
        {children}
      </a>
    ),
    p: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-sm text-neutral-600 dark:text-neutral-300">{children}</p>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">{children}</h3>
    ),
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={message.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" font-mono text-sm text-neutral-800 dark:text-neutral-200 overflow-hidden"
        id="markdown"
      >
        <ReactMarkdown components={components} className="overflow-y-scroll no-scrollbar-gutter">
          {message.content}
        </ReactMarkdown>
      </motion.div>
    </AnimatePresence>
  );
}, (prevProps, nextProps) => {
  return prevProps.message?.content === nextProps.message?.content;
});

AssistantMessage.displayName = "AssistantMessage";
export default AssistantMessage;
