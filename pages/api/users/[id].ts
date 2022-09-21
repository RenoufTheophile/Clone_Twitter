import prisma from "lib/clients/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ reason: "Unauthorized" });
    }

    if (req.method === "GET") {
        const userId = req.query.id as string;

        try {
            const tweets = await prisma.user.findUnique({
                include: {
                    Tweet: true,
                },
                where: {
                    id: userId,
                },
            });

            return res.status(200).json(tweets);
        } catch (error) {
            console.log(error);

            return res.status(422).json(error);
        }
    }

    res.end();
};
