"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface ChatsBarContextProps {
  chatsBarIsOpen: boolean;
  toggleChatsBar(): void;
}

interface ChatsBarProviderProps {
  children: ReactNode;
}

const ChatsBarContext = createContext({} as ChatsBarContextProps);

export function ChatsBarProvider(props: ChatsBarProviderProps) {
  const [chatsBarIsOpen, setChatsBarIsOpen] = useState(true);

  function toggleChatsBar() {
    setChatsBarIsOpen((oldChatsBarIsOpen) => !oldChatsBarIsOpen);
  }

  return (
    <ChatsBarContext.Provider value={{ chatsBarIsOpen, toggleChatsBar }}>
      {props.children}
    </ChatsBarContext.Provider>
  );
}

export const useChatsBar = () => useContext(ChatsBarContext);
