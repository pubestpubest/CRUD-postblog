import { PrismaClient } from "@prisma/client";
import { resolveNs } from "dns/promises";
const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  return Response.json(
    await prisma.post.findUnique({ where: { id: Number(params.id) } })
  );
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { title, content } = await req.json();
    const updatePost = await prisma.post.update({
      where: { id: Number(params.id) },
      data: { title, content },
    });
    return Response.json(updatePost);
  } catch (error) {
    return new Response(error as BodyInit, {
      status: 500,
    });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const deletePost = await prisma.post.delete({
      where: { id: Number(params.id) },
    });
    return Response.json(deletePost);
  } catch (error) {
    return new Response(error as BodyInit, {
      status: 500,
    });
  }
}
