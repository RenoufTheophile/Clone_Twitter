import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/layout";
import queryClient from "lib/clients/react-query";
import {Provider as NextAuthProvider} from "next-auth/providers";
import {SessionProvider} from "next-auth/react";

import Head from "next/head";
import React from "react";
import { QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import type {AppProps } from "next/app"

export default function  App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Head>
                    <link rel="shortcut icon" href="/public/favicon.ico"/>
                </Head>
                <SessionProvider session={pageProps.session}>
                    <ChakraProvider>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </ChakraProvider>
                </SessionProvider>
            </Hydrate>
        </QueryClientProvider>
    );
}


