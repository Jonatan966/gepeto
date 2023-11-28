"use client";

import { Button } from "@/components/ui/button";

import styles from "./styles.module.css";
import { useChatsBar } from "@/components/contexts/chats-bar-context";
import { PanelLeft } from "lucide-react";
import { UserFooter } from "./user-footer";
import Link from "next/link";

export function ChatsBar() {
  const { chatsBarIsOpen, toggleChatsBar } = useChatsBar();

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
          <Link href="/chat/bla">
            <Button variant="ghost" data-selected="true">
              Chat tal
            </Button>
          </Link>
          <Button variant="ghost">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </Button>
          <Button variant="ghost">Chat tal</Button>
          <Button variant="ghost">Chat tal</Button>
          <Button variant="ghost">Chat tal</Button>
          <Button variant="ghost">Chat tal</Button>
          <Button variant="ghost">Chat tal</Button>
        </main>

        <UserFooter />
      </div>
    </aside>
  );
}
