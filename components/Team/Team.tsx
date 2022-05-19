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
		const syncItems = async () => {
			await playSound("/pop.mp3");
			await setRender(true);
		};
		syncItems();
	}, []);

	return (
		<motion.div
			className="col"
			initial={{ scale: 0 }}
			animate={render && { scale: 1 }}
		>
			<img src={member.avatar.url} alt={member.name} width={300} />
			<h4>{member.name}</h4>
			<p>{member.position}</p>
		</motion.div>
	);
}
