import { TextField } from "@/components/ui/text-field";
import styles from "./page.module.css";
import { ChatsBar } from "@/components/domain/chats-bar";

export default function Home() {
  return (
    <div className={styles.container}>
      <ChatsBar />
      <main className={styles.chat}>
        <header>
          <span>Novo chat</span>
        </header>
        <main>
          <div className={styles.messageContainer}>
            <div className={styles.message}>
              <img src="https://github.com/Jonatan966.png" alt="Jonatan" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                architecto maiores, deleniti inventore ipsa nisi. Neque,
                accusantium expedita ullam quaerat id doloribus magnam odio,
                excepturi voluptatem saepe eum maiores illo?
              </p>
            </div>
          </div>

          <div className={styles.messageContainer}>
            <div className={styles.message}>
              <img src="https://github.com/Jonatan966.png" alt="Jonatan" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                architecto maiores, deleniti inventore ipsa nisi. Neque,
                accusantium expedita ullam quaerat id doloribus magnam odio,
                excepturi voluptatem saepe eum maiores illo?
              </p>
            </div>
          </div>

          <div className={styles.messageContainer}>
            <div className={styles.message}>
              <img src="https://github.com/Jonatan966.png" alt="Jonatan" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                architecto maiores, deleniti inventore ipsa nisi. Neque,
                accusantium expedita ullam quaerat id doloribus magnam odio,
                excepturi voluptatem saepe eum maiores illo?
              </p>
            </div>
          </div>

          <div className={styles.messageContainer}>
            <div className={styles.message}>
              <img src="https://github.com/Jonatan966.png" alt="Jonatan" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                architecto maiores, deleniti inventore ipsa nisi. Neque,
                accusantium expedita ullam quaerat id doloribus magnam odio,
                excepturi voluptatem saepe eum maiores illo?
              </p>
            </div>
          </div>
          <div className={styles.messageContainer}>
            <div className={styles.message}>
              <img src="https://github.com/Jonatan966.png" alt="Jonatan" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                architecto maiores, deleniti inventore ipsa nisi. Neque,
                accusantium expedita ullam quaerat id doloribus magnam odio,
                excepturi voluptatem saepe eum maiores illo?
              </p>
            </div>
          </div>
          <div className={styles.messageContainer}>
            <div className={styles.message}>
              <img src="https://github.com/Jonatan966.png" alt="Jonatan" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                architecto maiores, deleniti inventore ipsa nisi. Neque,
                accusantium expedita ullam quaerat id doloribus magnam odio,
                excepturi voluptatem saepe eum maiores illo?
              </p>
            </div>
          </div>
          <div className={styles.messageContainer}>
            <div className={styles.message}>
              <img src="https://github.com/Jonatan966.png" alt="Jonatan" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                architecto maiores, deleniti inventore ipsa nisi. Neque,
                accusantium expedita ullam quaerat id doloribus magnam odio,
                excepturi voluptatem saepe eum maiores illo?
              </p>
            </div>
          </div>
          <div className={styles.messageContainer}>
            <div className={styles.message}>
              <img src="https://github.com/Jonatan966.png" alt="Jonatan" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                architecto maiores, deleniti inventore ipsa nisi. Neque,
                accusantium expedita ullam quaerat id doloribus magnam odio,
                excepturi voluptatem saepe eum maiores illo?
              </p>
            </div>
          </div>
        </main>
        <footer>
          <TextField placeholder="Envie uma mensagem" />
        </footer>
      </main>
    </div>
  );
}
