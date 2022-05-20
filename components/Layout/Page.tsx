import { ReactNode } from "react";
import { Transition } from "./Transition";

interface PageProps {
	children: ReactNode;
	home?: boolean;
}

export const Page = ({ home, children }: PageProps) => (
	<Transition home={home}>{children}</Transition>
);
