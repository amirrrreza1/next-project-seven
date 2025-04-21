import { QUESTIONS } from "@/lib/questions";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = await params;
  const selected = QUESTIONS.find((item) => item.id === +id);

  if (!selected)
    return NextResponse.json({ error: "question not found" }, { status: 404 });

  return NextResponse.json({ selected });
};
