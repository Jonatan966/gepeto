import crypto from "crypto";

import styles from "./page.module.css";
import { ChatsBar } from "@/components/domain/chats-bar";
import { Chat } from "@/components/domain/chat";
import { ChatsBarProvider } from "@/components/contexts/chats-bar-context";

export default function Home() {
  const chatId = crypto.randomUUID();

  return (
    <ChatsBarProvider>
      <div className={styles.container}>
        <ChatsBar />
        <Chat chatId={chatId} />
      </div>
    </ChatsBarProvider>
  );
}
