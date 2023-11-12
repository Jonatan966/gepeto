"use client";

import { TextField } from "@/components/ui/text-field";
import { Message } from "./message";

import styles from "./styles.module.css";
import { useChatsBar } from "@/components/contexts/chats-bar-context";
import { Button } from "@/components/ui/button";
import { PanelLeft } from "lucide-react";

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
        <TextField placeholder="Envie uma mensagem" />
      </footer>
    </main>
  );
}
