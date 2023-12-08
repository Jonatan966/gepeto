import * as uuid from "uuid";

import { Chat } from "@/components/domain/chat";

export default function Home() {
  const chatId = uuid.v4();

  return <Chat chatId={chatId} isNew savedMessages={[]} />;
}
