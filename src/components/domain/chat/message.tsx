import clsx from "clsx";
import { Message } from "ai/react";
import { useSession } from "next-auth/react";
import Image from "next/image";

import styles from "./styles.module.css";

interface MessageProps {
  message: Message;
}

export function Message({ message }: MessageProps) {
  const session = useSession();

  const isRobot = message.role !== "user";
  const userImage = session?.data?.user?.image || "/default-user.png";

  return (
    <div
      className={clsx(styles.messageWrapper, {
        [styles.robotMessageWrapper]: isRobot,
      })}
    >
      <div className={styles.messageContainer}>
        <Image
          src={isRobot ? "/gepeto.png" : userImage}
          alt={isRobot ? "Imagem de Gepeto" : "Imagem do usuário"}
          width={64}
          height={64}
        />
        <p>{message.content}</p>
      </div>
    </div>
  );
}
