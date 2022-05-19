import { motion, useTransform, useViewportScroll } from "framer-motion";
import { SectionWrapper } from "./styles";

export default function AboutSections({ section }) {
	const { scrollY } = useViewportScroll();
	const scrollRange = [0, 500, 700];
	const parallaxRange = [0, 300, 500];
	const parallaxY = useTransform(scrollY, scrollRange, parallaxRange);
	//400 => 200

	return (
		<motion.div animate={{ y: 100 }} style={{ y: parallaxY, width: "100%" }}>
			<SectionWrapper className="row">
				<div className="col">
					<h4>{section.heading}</h4>
					<div dangerouslySetInnerHTML={{ __html: section.description.html }} />
				</div>
				<div className="col">
					{section.image?.url && (
						<img src={section.image.url} alt={section.heading} width={350} />
					)}
				</div>
			</SectionWrapper>
		</motion.div>
	);
}
