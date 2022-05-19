import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Howl, Howler } from "howler";

export default function TeamMembers({ member }) {
	const [render, setRender] = useState(false);
	const playSound = (sound: any) => {
		const audio = new Howl({
			src: [sound],
		});

		audio.play();
	};
	Howler.volume(0.1);

	useEffect(() => {
		playSound("/pop.mp3");
		setRender(true);
	}, []);

	return (
		<div className="container d-flex justify-content-center">
			<div className="row">
				<motion.div
					className="col"
					initial={{ scale: 0 }}
					animate={render && { scale: 1 }}
				>
					<img src={member.avatar.url} alt={member.name} width={300} />
					<h4>{member.name}</h4>
					<p>{member.position}</p>
				</motion.div>
			</div>
		</div>
	);
}
