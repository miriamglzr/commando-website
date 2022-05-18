import { gql, useQuery } from "@apollo/client";
import { motion } from "framer-motion";

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

	return (
		<div className="container d-flex justify-content-center">
			<div className="row">
				{data?.teamMembers.map((member) => {
					return (
						<motion.div
							key={member.id}
							className="col"
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
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
