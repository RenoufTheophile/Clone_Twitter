

import NextAuth from "next-auth";

import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import * as Prisma from "@prisma/client"
import Providers from "next-auth/providers";
import {Provider} from "next-auth/providers";
import TwitterProvider from "next-auth/providers/twitter"

const prisma = new PrismaClient()

const options = {
    providers: [
        TwitterProvider({
            clientId: process.env.TWITTER_KEY,
            clientSecret: process.env.TWITTER_SECRET,
        }),
    ],
    adapter: PrismaAdapter(prisma),
};

export default NextAuth(options)
