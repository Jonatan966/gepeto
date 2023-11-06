import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <aside className={styles.chatsMenu}>
        <header>
          <button>Nova conversa</button>
          <button>B</button>
        </header>

        <main>
          <button data-selected="true">Chat tal</button>
          <button>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </button>
          <button>Chat tal</button>
          <button>Chat tal</button>
          <button>Chat tal</button>
          <button>Chat tal</button>
        </main>

        <footer>Jonatan Frederico</footer>
      </aside>
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
          <div>
            <input type="text" placeholder="Envie uma mensagem" />
          </div>
        </footer>
      </main>
    </div>
  );
}
