import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { AppCtxProvider } from "../context.tsx/Context";

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<AppCtxProvider>
			<AnimatePresence exitBeforeEnter>
				<Component key={router.asPath} {...pageProps} />
			</AnimatePresence>
		</AppCtxProvider>
	);
}

export default MyApp;
