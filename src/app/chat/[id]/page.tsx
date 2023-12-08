import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Chat } from "@/components/domain/chat";
import { prisma } from "@/services/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import * as uuid from "uuid";

interface ChatPageProps {
  params: {
    id: string;
  };
}

export default async function ChatPage(props: ChatPageProps) {
  const session = await getServerSession(authOptions);

  if (!session || !uuid.validate(props.params.id)) {
    return redirect("/?error=invalid_chat");
  }

  const data = await prisma.chats.findUnique({
    where: {
      id: props.params.id,
      callerId: session?.user.id,
    },
    include: {
      messages: true,
    },
  });

  if (!data) {
    return redirect("/?error=invalid_chat");
  }

  return (
    <Chat
      chatId={props.params.id}
      title={data?.title}
      savedMessages={data?.messages}
    />
  );
}
