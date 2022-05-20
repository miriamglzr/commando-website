import { Page } from "../../components/Layout/Page";
import TeamMembers from "../../components/Team/Team";
import { GetTeamMembersQuery } from "../../generated/graphql";
import { Header } from "../../components/Team/styles";
import { motion } from "framer-motion";
import { gql, request } from "graphql-request";

const gqlUrl =
	"https://api-eu-central-1.graphcms.com/v2/cl345fns355od01xqgs8ugfv9/master";

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

export async function getStaticProps() {
	const data = await request<GetTeamMembersQuery>(gqlUrl, GET_TEAM_MEMBERS);

	return {
		props: {
			teamMembers: data.teamMembers,
		},
	};
}
export default function Team({ teamMembers }) {
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
					{teamMembers.map((member) => (
						<TeamMembers member={member} key={member.id} />
					))}
				</div>
			</motion.div>
		</Page>
	);
}
