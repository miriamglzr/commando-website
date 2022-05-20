import { Page } from "../../components/Layout/Page";
import TeamMembers from "../../components/Team/Team";
import { gql, useQuery } from "@apollo/client";
import { GetTeamMembersQuery } from "../../generated/graphql";

import { Header } from "../../components/Team/styles";
import { motion } from "framer-motion";
const transition = { duration: 2, ease: "easeInOut" };

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

export default function Team() {
	const { data } = useQuery<GetTeamMembersQuery>(GET_TEAM_MEMBERS);

	return (
		<Page>
			<title>Mando | Team</title>
			<motion.div
				className="container"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 20 }}
			>
				<Header>Our team</Header>
				<div className="row justify-content-between d-flex ">
					{data?.teamMembers.map((member) => (
						<TeamMembers member={member} key={member.id} />
					))}
				</div>
			</motion.div>
		</Page>
	);
}
