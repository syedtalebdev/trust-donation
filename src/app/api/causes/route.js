import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  if (!prisma) {
    return NextResponse.json([])
  }
  try {
    const causes = await prisma.cause.findMany({
      orderBy: { id: 'asc' },
    })
    return NextResponse.json(causes)
  } catch (error) {
    console.error('GET /api/causes error:', error)
    return NextResponse.json([])
  }
}
