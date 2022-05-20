import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageProps {
	children: ReactNode;
	home?: boolean;
}

export const Transition = ({ home, children }: PageProps) => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ type: "spring", bounce: 0, duration: 0.15 }}
		// style={home && { overflow: "hidden" }}
	>
		{children}
	</motion.div>
);
