import styles from "./page.module.css";
import { ChatsBar } from "@/components/domain/chats-bar";
import { Chat } from "@/components/domain/chat";

export default function Home() {
  return (
    <div className={styles.container}>
      <ChatsBar />
      <Chat />
    </div>
  );
}
