import styles from "./page.module.css";
import { ChatsBar } from "@/components/domain/chats-bar";
import { Chat } from "@/components/domain/chat";
import { ChatsBarProvider } from "@/components/contexts/chats-bar-context";

export default function Home() {
  return (
    <ChatsBarProvider>
      <div className={styles.container}>
        <ChatsBar />
        <Chat />
      </div>
    </ChatsBarProvider>
  );
}
