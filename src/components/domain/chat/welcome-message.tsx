import Image from "next/image";

import styles from "./styles.module.css";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function WelcomeMessage() {
  const session = useSession();

  return (
    <div className={styles.welcomeMessage}>
      <Image src="/gepeto.png" alt="Gepeto" width={64} height={64} />
      {session.data?.user ? (
        <h2>Como posso te ajudar hoje?</h2>
      ) : (
        <Button style={{ flex: 1 }} onClick={() => signIn("discord")}>
          Entrar com o Discord
        </Button>
      )}
    </div>
  );
}
