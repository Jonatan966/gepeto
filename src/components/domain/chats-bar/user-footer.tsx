"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Loader, Power } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

import styles from "./styles.module.css";

export function UserFooter() {
  const session = useSession();

  const AuthButtonState = {
    loading: <Loader className="spinner" style={{ margin: "0 auto" }} />,
    unauthenticated: (
      <Button style={{ flex: 1 }} onClick={() => signIn("discord")}>
        Entrar com o Discord
      </Button>
    ),
    authenticated: (
      <Button onClick={() => signOut()} style={{ fontSize: 0 }} title="Sair">
        <Power size={20} />
      </Button>
    ),
  };

  return (
    <footer>
      {session.data?.user?.image && (
        <Image
          alt=""
          src={session.data?.user?.image}
          width={40}
          height={40}
          className={styles.avatar}
        />
      )}
      {session.data?.user?.name && <span>{session.data.user.name}</span>}
      {AuthButtonState[session.status]}
    </footer>
  );
}
