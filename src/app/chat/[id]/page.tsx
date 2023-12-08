import { Chat } from "@/components/domain/chat";
import { prisma } from "@/services/prisma";

interface ChatPageProps {
  params: {
    id: string;
  };
}

export default async function ChatPage(props: ChatPageProps) {
  const data = await prisma.chats.findUnique({
    where: {
      id: props.params.id,
    },
    include: {
      messages: true,
    },
  });

  return (
    <Chat
      chatId={props.params.id}
      title={data?.title}
      savedMessages={data?.messages}
    />
  );
}
