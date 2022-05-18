import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageProps {
	children: ReactNode;
}

export const Transition = ({ children }: PageProps) => (
	<motion.div
		initial={{ x: -15, opacity: 0 }}
		animate={{ x: 0, opacity: 1 }}
		exit={{ x: 15, opacity: 0 }}
		transition={{ type: "spring", bounce: 0, duration: 0.15 }}
	>
		{children}
	</motion.div>
);
