import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface PageProps {
	children: ReactNode;
}

export const Transition = ({ children }: PageProps) => (
	<AnimatePresence>
		<motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
			{children}
		</motion.div>
	</AnimatePresence>
);
