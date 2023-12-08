import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { Inter } from "next/font/google";
import "./globals.css";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { SessionProvider } from "@/components/contexts/session-context";
import { ChatsBarProvider } from "@/components/contexts/chats-bar-context";
import { ChatsBar } from "@/components/domain/chats-bar";

import styles from "./page.module.css";
import { prisma } from "@/services/prisma";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gepeto",
  description: "Seu ChatBot de confiança",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💡</text></svg>",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const chats = session
    ? await prisma.chats.findMany({
        where: {
          callerId: session?.user.id,
        },
      })
    : [];

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ChatsBarProvider previousChats={chats}>
            <div className={styles.container}>
              <ChatsBar />

              {children}
            </div>
          </ChatsBarProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
