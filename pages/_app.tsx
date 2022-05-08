import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { AppCtxProvider } from "../context.tsx/Context";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppCtxProvider>
			<Component {...pageProps} />
		</AppCtxProvider>
	);
}

export default MyApp;
