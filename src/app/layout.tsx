import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { Inter } from "next/font/google";
import "./globals.css";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { SessionProvider } from "@/components/contexts/session-context";

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

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
