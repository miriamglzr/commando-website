import { ReactNode } from "react";
import { Transition } from "./Transition";

interface PageProps {
	children: ReactNode;
	home?: boolean;
}

export const Page = ({ children }: PageProps) => (
	<Transition>{children}</Transition>
);
