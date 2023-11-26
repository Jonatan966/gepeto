"use client";

import { PanelLeft, Send, Mic } from "lucide-react";
import { useChat } from "ai/react";

import { TextField } from "@/components/ui/text-field";
import { useChatsBar } from "@/components/contexts/chats-bar-context";
import { Button } from "@/components/ui/button";
import { Message } from "./message";

import styles from "./styles.module.css";

interface ChatProps {
  chatId: string;
}

export function Chat({ chatId }: ChatProps) {
  const { toggleChatsBar, chatsBarIsOpen } = useChatsBar();
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    id: chatId,
    body: {
      chatId,
    },
  });

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
        <span>Novo chat</span>
      </header>
      <main>
        {messages.map((message) => (
          <Message {...{ message }} key={message.id} />
        ))}
      </main>
      <footer>
        <form onSubmit={handleSubmit}>
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
