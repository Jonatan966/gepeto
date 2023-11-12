"use client";

import { TextField } from "@/components/ui/text-field";
import { Message } from "./message";

import styles from "./styles.module.css";
import { useChatsBar } from "@/components/contexts/chats-bar-context";
import { Button } from "@/components/ui/button";
import { PanelLeft, Send, Mic } from "lucide-react";

export function Chat() {
  const { toggleChatsBar, chatsBarIsOpen } = useChatsBar();

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
        <Message isRobot />
        <Message />
        <Message isRobot />
        <Message />
        <Message isRobot />
      </main>
      <footer>
        <div>
          <TextField placeholder="Envie uma mensagem" />
          <Button variant="ghost" style={{ fontSize: 0 }}>
            <Mic size={18} />
          </Button>
          <Button style={{ fontSize: 0 }}>
            <Send size={18} />
          </Button>
        </div>
      </footer>
    </main>
  );
}
