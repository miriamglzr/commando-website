import { gql, useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Howl, Howler } from "howler";

export const GET_TEAM_MEMBERS = gql`
	query GetTeamMembers {
		teamMembers {
			id
			avatar {
				url
			}
			name
			position
		}
	}
`;

export default function TeamMembers() {
	const { data } = useQuery(GET_TEAM_MEMBERS);
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
				{data?.teamMembers.map((member) => {
					return (
						<motion.div
							key={member.id}
							className="col"
							initial={{ scale: 0 }}
							animate={render && { scale: 1 }}
						>
							<img src={member.avatar.url} alt={member.name} width={300} />
							<h4>{member.name}</h4>
							<p>{member.position}</p>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
