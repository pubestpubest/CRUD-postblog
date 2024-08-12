import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export function GET() {
  return Response.json({
    title: "hello",
    content: "prisma",
  });
}

export async function POST(req: Request) {
  try {
    const { title, content } = await req.json();
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
      },
    });
    return Response.json(newPost);
  } catch (error) {
    return new Response(error as BodyInit, {
      status: 500,
    });
  }
}
