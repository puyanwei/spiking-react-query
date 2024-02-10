import { NextRequest, NextResponse } from "next/server"
import { State } from "../page"

export async function GET() {
  const state: State[] = Array(9).fill({ player: null, state: null })

  return NextResponse.json(state)
}

export async function POST(request: NextRequest) {
  console.log(request.json())
  return NextResponse.json({ message: "Posted successfully" })
}

export async function PUT() {
  return NextResponse.json({ message: "Hello - PUT" })
}

export async function DELETE() {
  return NextResponse.json({ message: "Hello - DELETE" })
}
