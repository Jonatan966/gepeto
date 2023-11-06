import { TextField } from "@/components/ui/text-field";
import { Message } from "./message";

import styles from "./styles.module.css";

export function Chat() {
  return (
    <main className={styles.chat}>
      <header>
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
