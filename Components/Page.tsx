import { ReactNode } from "react";
// import { Header } from "./Header";
import Layout from "./Layout";
import { Transition } from "./Transition";

interface PageProps {
	children: ReactNode;
	home?: boolean;
}

export const Page = ({ children, home }: PageProps) => (
	<Layout home>
		{/* <Header /> */}

		<Transition>{children}</Transition>
	</Layout>
);
