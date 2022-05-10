import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { AppCtxProvider } from "../context.tsx/Context";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<AppCtxProvider>
			<Layout>
				<AnimatePresence exitBeforeEnter>
					<Component key={router.asPath} {...pageProps} />
				</AnimatePresence>
			</Layout>
		</AppCtxProvider>
	);
}

export default MyApp;
