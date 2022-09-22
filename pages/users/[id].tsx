import AccessDeniedIndicator from "components/access-denied-indicator";
import Page from "components/pages/users/[id]";
import fetchUser from "lib/queries/fetch-user";
import queryClient from "lib/clients/react-query";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import * as React from "react";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";

const MyAccountPage: InferGetServerSidePropsType<typeof getServerSideProps> = ({
                                                                                   id,
                                                                               }) => {
    const { data } = useQuery("user", () => fetchUser(id as string));
    const session = useSession();
    //console.log(session.data.user.name)

    if (!session) {
        return <AccessDeniedIndicator />;
    }

    return (
        <>
            <Head>
                <title>s profile</title>
            </Head>
            <Page user={data} />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async ({
                                                                 req,
                                                                 query,
                                                             }) => {
    const session = await getSession({ req });

    await queryClient.prefetchQuery("user", () =>
        fetchUser(query.id as string)
    );

    return {
        props: {
            session,
            dehydratedState: dehydrate(queryClient),
            id: query.id,
        },
    };
};

export default MyAccountPage;
