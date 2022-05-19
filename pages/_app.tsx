import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import Layout from "../components/Layout/Layout";
import { ApolloProvider } from "@apollo/client";

import { client } from "../apollo";
import CustomCursor from "../components/Cursor/Cursor";

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Layout>
				<CustomCursor />
				<AnimatePresence exitBeforeEnter>
					<Component key={router.asPath} {...pageProps} />
				</AnimatePresence>
			</Layout>
		</ApolloProvider>
	);
}

export default MyApp;
