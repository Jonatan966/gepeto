import * as uuid from "uuid";

import styles from "./page.module.css";
import { ChatsBar } from "@/components/domain/chats-bar";
import { Chat } from "@/components/domain/chat";
import { ChatsBarProvider } from "@/components/contexts/chats-bar-context";

export default function Home() {
  const chatId = uuid.v4();

  return (
    <ChatsBarProvider>
      <div className={styles.container}>
        <ChatsBar />
        <Chat chatId={chatId} />
      </div>
    </ChatsBarProvider>
  );
}
