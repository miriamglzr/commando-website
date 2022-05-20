import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { SectionDescription, SectionHeading, SectionWrapper } from "./styles";

export default function SectionTwo({ section }) {
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			control.start("visible");
		} else {
			control.start("hidden");
		}
	}, [control, inView]);

	const sectionVariants = {
		visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
		hidden: { opacity: 0, x: 200 },
	};
	return (
		<motion.div
			ref={ref}
			variants={sectionVariants}
			initial="hidden"
			animate={control}
		>
			<SectionWrapper className="row">
				<div className="col">
					{section.image?.url && (
						<motion.img
							src={section.image.url}
							alt={section.heading}
							width={350}
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ type: "spring", duration: 1, delay: 1 }}
							style={{ borderRadius: "3px" }}
						/>
					)}
				</div>
				<motion.div
					className="col mr-5 pr-5"
					initial={{ x: 200, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "spring", duration: 1, delay: 1 }}
				>
					<SectionHeading>{section.heading}</SectionHeading>
					<SectionDescription
						dangerouslySetInnerHTML={{ __html: section.description.html }}
					/>
				</motion.div>
			</SectionWrapper>
		</motion.div>
	);
}
