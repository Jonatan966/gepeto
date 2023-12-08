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
  previousChats: chats[];
}

const ChatsBarContext = createContext({} as ChatsBarContextProps);

export function ChatsBarProvider(props: ChatsBarProviderProps) {
  const [chatsBarIsOpen, setChatsBarIsOpen] = useState(true);
  const [chats, setChats] = useState<TinyChat[]>(
    props.previousChats.map((chat) => ({
      id: chat.id,
      title: chat.title,
    }))
  );

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
