import { QUESTIONS } from "@/lib/questions"
import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json({ QUESTIONS })
}