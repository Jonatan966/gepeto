import Image from "next/image";

import styles from "./styles.module.css";

export function WelcomeMessage() {
  return (
    <div className={styles.welcomeMessage}>
      <Image src="/gepeto.png" alt="" width={64} height={64} />
      <h2>Como posso te ajudar hoje?</h2>
    </div>
  );
}
