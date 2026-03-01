import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import path from 'path'

const globalForPrisma = globalThis

function createPrismaClient() {
  const url = process.env.TURSO_DATABASE_URL
    || `file:${path.resolve(process.cwd(), 'dev.db').replace(/\\/g, '/')}`

  const authToken = process.env.TURSO_AUTH_TOKEN || undefined

  const adapter = new PrismaLibSql({ url, authToken })
  return new PrismaClient({ adapter })
}

let prisma = null

try {
  prisma = globalForPrisma.prisma ?? createPrismaClient()
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
} catch {
  prisma = null
}

export default prisma
