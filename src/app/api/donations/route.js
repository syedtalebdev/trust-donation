import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request) {
  try {
    const body = await request.json()
    const { causeSlug, amount, isMonthly, paymentMethod, donorInfo } = body

    if (!donorInfo?.name || !donorInfo?.email || !amount || amount < 10) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    let cause = null
    if (causeSlug) {
      cause = await prisma.cause.findUnique({ where: { slug: causeSlug } })
    }

    const reference = `HF${Date.now().toString().slice(-8)}${Math.random().toString(36).slice(-4).toUpperCase()}`

    const result = await prisma.$transaction(async (tx) => {
      const donor = await tx.donor.create({
        data: {
          name: donorInfo.name,
          email: donorInfo.email,
          phone: donorInfo.phone || null,
          pan: donorInfo.pan || null,
        },
      })

      const donation = await tx.donation.create({
        data: {
          causeId: cause?.id ?? null,
          donorId: donor.id,
          amount: parseFloat(amount),
          isMonthly: Boolean(isMonthly),
          paymentMethod,
          reference,
        },
      })

      if (cause) {
        await tx.cause.update({
          where: { id: cause.id },
          data: {
            raised: { increment: parseFloat(amount) },
            supporters: { increment: 1 },
          },
        })
      }

      return donation
    })

    return NextResponse.json({ success: true, reference: result.reference })
  } catch (error) {
    console.error('POST /api/donations error:', error)
    return NextResponse.json(
      { error: 'Donation processing failed' },
      { status: 500 }
    )
  }
}
