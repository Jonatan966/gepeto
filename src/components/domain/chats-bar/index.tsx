"use client";

import { Button } from "@/components/ui/button";
import styles from "./styles.module.css";
import { useChatsBar } from "@/components/contexts/chats-bar-context";
import { PanelLeft } from "lucide-react";
import { UserFooter } from "./user-footer";
import Link from "next/link";
import { useParams } from "next/navigation";

export function ChatsBar() {
  const pageParams = useParams<{ id: string }>();
  const { chatsBarIsOpen, chats, toggleChatsBar } = useChatsBar();

  return (
    <aside
      className={styles.chatsBar}
      data-open={chatsBarIsOpen ? "on" : "off"}
    >
      <div className={styles.wrapper}>
        <header>
          <Link href="/">
            <Button variant="outline" style={{ width: "100%" }}>
              Nova conversa
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={toggleChatsBar}
            style={{ fontSize: 0 }}
          >
            <PanelLeft size={16} />
          </Button>
        </header>

        <main>
          {chats.map((chat) => (
            <Link href={`/chat/${chat.id}`} key={chat.id}>
              <Button
                variant="ghost"
                data-selected={pageParams.id === chat.id ? "true" : "false"}
              >
                <span>{chat.title}</span>
              </Button>
            </Link>
          ))}
        </main>

        <UserFooter />
      </div>
    </aside>
  );
}
