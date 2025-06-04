import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient

if (process.env.NODE_ENV != "production") {
    globalThis.prisma = db;
    
}

// next js has hot reloading, whenever we saves our app it relaods our app and creates new instance of our prisma instance 

//globalThis.prisma - this global variable ensure that the prisma client instance is reused across hot reloads during development. without this, each time your application reloads, a new instance of the Prisma client would be created, potentially leading to connectoin leading.