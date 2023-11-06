import clsx from "clsx";
import styles from "./styles.module.css";

interface MessageProps {
  isRobot?: boolean;
}

export function Message(props: MessageProps) {
  return (
    <div
      className={clsx(styles.messageWrapper, {
        [styles.robotMessageWrapper]: props?.isRobot,
      })}
    >
      <div className={styles.messageContainer}>
        <img src="https://github.com/Jonatan966.png" alt="Jonatan" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          architecto maiores, deleniti inventore ipsa nisi. Neque, accusantium
          expedita ullam quaerat id doloribus magnam odio, excepturi voluptatem
          saepe eum maiores illo?
        </p>
      </div>
    </div>
  );
}
