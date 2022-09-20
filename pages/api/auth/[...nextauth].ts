

import NextAuth from "next-auth";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import * as Prisma from "@prisma/client";
import Providers from "next-auth/providers";
import {Provider} from "next-auth/providers";
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"
import Auth0Provider from "next-auth/providers/auth0"
import {NextApiHandler} from "next";


const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);

const prisma = new PrismaClient()

const options = {
    providers: [
        TwitterProvider({
            clientId: process.env.TWITTER_KEY,
            clientSecret: process.env.TWITTER_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.SECRET,
};

export default authHandler;
