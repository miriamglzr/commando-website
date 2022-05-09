import { ReactNode } from "react";

import Layout from "./Layout";
import { Transition } from "./Transition";

interface PageProps {
	children: ReactNode;
	home?: boolean;
}

export const Page = ({ children, home }: PageProps) => (
	<Layout home>
		<Transition>{children}</Transition>
	</Layout>
);
