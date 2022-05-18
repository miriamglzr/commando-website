import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { AppCtxProvider } from "../context.tsx/Context";
import Layout from "../components/Layout/Layout";
import { ApolloProvider } from "@apollo/client";

import { client } from "../apollo";

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<AppCtxProvider>
				<Layout>
					<AnimatePresence exitBeforeEnter>
						<Component key={router.asPath} {...pageProps} />
					</AnimatePresence>
				</Layout>
			</AppCtxProvider>
		</ApolloProvider>
	);
}

export default MyApp;
