"use client";

import { chats } from "@prisma/client";
import { ReactNode, createContext, useContext, useState } from "react";

type TinyChat = Pick<chats, "id" | "title">;

interface ChatsBarContextProps {
  chatsBarIsOpen: boolean;
  chats: TinyChat[];
  toggleChatsBar(): void;
  addChat(chat: TinyChat): void;
}

interface ChatsBarProviderProps {
  children: ReactNode;
}

const ChatsBarContext = createContext({} as ChatsBarContextProps);

export function ChatsBarProvider(props: ChatsBarProviderProps) {
  const [chatsBarIsOpen, setChatsBarIsOpen] = useState(true);
  const [chats, setChats] = useState<TinyChat[]>([]);

  function toggleChatsBar() {
    setChatsBarIsOpen((oldChatsBarIsOpen) => !oldChatsBarIsOpen);
  }

  function addChat(chat: TinyChat) {
    setChats((oldChats) => {
      const chatAsAlreadySaved = oldChats.some(
        (oldChat) => oldChat.id === chat.id
      );

      if (chatAsAlreadySaved) {
        return oldChats;
      }

      return [chat, ...oldChats];
    });
  }

  return (
    <ChatsBarContext.Provider
      value={{ chatsBarIsOpen, chats, addChat, toggleChatsBar }}
    >
      {props.children}
    </ChatsBarContext.Provider>
  );
}

export const useChatsBar = () => useContext(ChatsBarContext);
