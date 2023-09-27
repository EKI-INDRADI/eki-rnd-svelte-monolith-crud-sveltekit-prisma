import { PrismaClient } from "@prisma/client"

// 	global.prisma = prisma

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === "development") {
	global.prisma = prisma
} 


// delete ./src/lib/server/prisma.js <---- bug connection prisma.js , because using .ts 

export { prisma }
