import OpenAI from "openai";
import { Message, OpenAIStream, StreamingTextResponse } from "ai";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/services/prisma";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_TOKEN,
});

export async function POST(req: Request) {
  const { messages, chatId } = await req.json();

  const lastUserMessage = messages.at(-1) as Message;
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  if (!userId) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  const [account, savedChat] = await Promise.all([
    prisma.account.findFirst({
      where: {
        userId,
      },
    }),
    prisma.chats.findUnique({ where: { id: chatId } }),
  ]);

  if (!savedChat) {
    await prisma.chats.create({
      data: {
        callerId: account?.providerAccountId,
        title: lastUserMessage.content,
        id: chatId,
      },
    });
  }

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "Você é um assistente virtual que ajuda o usuário com o que puder, sendo simpático e sucinto",
      },
      ...messages,
    ],
  });

  const stream = OpenAIStream(response, {
    async onCompletion(completion) {
      await prisma.conversations.createMany({
        data: [
          {
            chatId,
            content: lastUserMessage.content,
            role: "user",
            userId: account?.providerAccountId!,
          },
          {
            chatId,
            content: completion,
            role: "assistant",
            userId: account?.providerAccountId!,
          },
        ],
      });
    },
  });

  return new StreamingTextResponse(stream);
}
