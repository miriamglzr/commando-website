import type { NextPage } from "next";
//variants for the animation
//trace animation
//open
import { Page } from "../components/Layout/Page";
import { motion } from "framer-motion";
import CustomCursor from "../components/Cursor/Cursor";
const itemVariants = {
	hidden: {
		opacity: 0,
		y: -100,
		transition: {
			ease: "easeIn",
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			mass: 3,
		},
	},
};

const listVariants = {
	hidden: {
		opacity: 0,
		transition: {
			when: "afterChildren",
			staggerChildren: 2,
		},
	},
	visible: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 2,
		},
	},
};
const Home: NextPage = () => {
	return (
		<Page home>
			<title>Mando</title>
			<div className="container d-flex align-items-center justify-content-center h-100">
				<CustomCursor />
				<div className="col d-flex flex-col flex-wrap">
					<motion.div
						style={{
							maxHeight: 100,
							overflowY: "hidden",
							alignContent: "end",
							display: "flex",
							flexDirection: "column",
							paddingTop: "20px",
						}}
						variants={listVariants}
					>
						<motion.h1
							className="text-start"
							//initial={{ y: 0, opacity: 1 }}
							animate={{ y: [0, -100], opacity: [1, 0] }}
							transition={{
								type: "spring",
								duration: 0.8,
								delay: 1.2,
							}}
							style={{
								fontSize: "64px",
								marginTop: "30px",
								lineHeight: 0.8,
								color: "white",
							}}
							variants={itemVariants}
						>
							Easy
						</motion.h1>
						<motion.h1
							className="text-start"
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: [0, -90, -200], opacity: [0, 1, 0] }}
							transition={{
								type: "spring",
								duration: 2,
								delay: 1,
							}}
							style={{
								fontSize: "64px",
								marginTop: "30px",
								lineHeight: 0.8,
								color: "white",
							}}
							variants={itemVariants}
						>
							Fast
						</motion.h1>
						<motion.h1
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: [0, -90, -200], opacity: [0, 0, 1] }}
							transition={{
								type: "spring",
								duration: 2,
								delay: 1,
							}}
							style={{
								fontSize: "64px",
								marginTop: "30px",
								lineHeight: 0.8,
								color: "white",
							}}
							variants={itemVariants}
						>
							Simple
						</motion.h1>
					</motion.div>
					<h2
						style={{
							fontSize: "60px",
							lineHeight: 0.5,
							marginLeft: "130px",
							marginBottom: "30px",
							color: "white",
						}}
					>
						Ordering.
					</h2>

					<p
						className="m-4 text-start"
						style={{
							color: "rgba(255, 255, 255, 0.79)",
							width: "360px",
							display: "flex",
							justifyContent: "flex-start",
						}}
					>
						Stay close to your costumers and let them order directly from their
						phone.
					</p>
				</div>
				<div className="col">
					<motion.img
						initial={{ x: 20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "spring", duration: 1, delay: 0.2 }}
						src="/heroLandingSpot.png"
						alt="spot"
						style={{
							left: "-30px",
							top: "-223px",
							width: "500px",
						}}
					/>
				</div>
			</div>
		</Page>
	);
};

export default Home;
