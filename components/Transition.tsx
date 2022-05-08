import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface PageProps {
	children: ReactNode;
}

export const Transition = ({ children }: PageProps) => (
	<AnimatePresence>
		<motion.div
			initial={{ y: -10 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", bounce: 0, duration: 0.2 }}
		>
			{children}
		</motion.div>
	</AnimatePresence>
);
