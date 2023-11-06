import { Button } from "@/components/ui/button";

import styles from "./styles.module.css";

export function ChatsBar() {
  return (
    <aside className={styles.chatsBar}>
      <header>
        <Button variant="outline">Nova conversa</Button>
        <Button variant="outline">B</Button>
      </header>

      <main>
        <Button data-selected="true">Chat tal</Button>
        <Button>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </Button>
        <Button>Chat tal</Button>
        <Button>Chat tal</Button>
        <Button>Chat tal</Button>
        <Button>Chat tal</Button>
        <Button>Chat tal</Button>
      </main>

      <footer>Jonatan Frederico</footer>
    </aside>
  );
}
