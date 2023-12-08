"use client";

import { PanelLeft, Send, Mic } from "lucide-react";
import { useChat } from "ai/react";

import { TextField } from "@/components/ui/text-field";
import { useChatsBar } from "@/components/contexts/chats-bar-context";
import { Button } from "@/components/ui/button";
import { Message } from "./message";

import styles from "./styles.module.css";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { conversations } from "@prisma/client";
import { Message as MessageType } from "ai";

interface ChatProps {
  chatId: string;
  isNew?: boolean;
  title?: string | null;
  savedMessages?: conversations[];
}

export function Chat({ chatId, isNew, title, savedMessages = [] }: ChatProps) {
  const router = useRouter();

  const { toggleChatsBar, addChat, chatsBarIsOpen } = useChatsBar();
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    id: chatId,
    body: {
      chatId,
    },
    onFinish() {
      if (!isNew) {
        return;
      }

      router.replace(`/chat/${chatId}`);
    },
    initialMessages: savedMessages.map((msg) => ({
      content: msg.content,
      id: msg.id,
      role: msg.role as MessageType["role"],
    })),
  });

  function onSendMessage(event: FormEvent<HTMLFormElement>) {
    if (!messages.length) {
      addChat({
        id: chatId,
        title: input,
      });
    }

    handleSubmit(event);
  }

  return (
    <main className={styles.chat}>
      <header>
        <Button
          variant="ghost"
          data-chat-open={chatsBarIsOpen ? "on" : "off"}
          onClick={toggleChatsBar}
          style={{ fontSize: 0 }}
        >
          <PanelLeft size={16} />
        </Button>
        <span>{title || "Novo chat"}</span>
      </header>
      <main>
        {messages.map((message) => (
          <Message {...{ message }} key={message.id} />
        ))}
      </main>
      <footer>
        <form onSubmit={onSendMessage}>
          <TextField
            placeholder="Envie uma mensagem"
            onChange={handleInputChange}
            value={input}
          />
          <Button variant="ghost" style={{ fontSize: 0 }} type="button">
            <Mic size={18} />
          </Button>
          <Button style={{ fontSize: 0 }} type="submit">
            <Send size={18} />
          </Button>
        </form>
      </footer>
    </main>
  );
}
