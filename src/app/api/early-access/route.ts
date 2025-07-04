import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const exists = await prisma.earlyAccess.findUnique({ where: { email } })

    if (exists) {
      return NextResponse.json({ message: 'Already signed up' }, { status: 200 })
    }

    await prisma.earlyAccess.create({ data: { email } })

    return NextResponse.json({ message: 'Signed up successfully' }, { status: 201 })

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
