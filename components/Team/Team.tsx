import { gql, useQuery } from "@apollo/client";

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
		<ul>
			{data?.teamMembers.map((member) => {
				return (
					<li key={member.id}>
						<img src={member.avatar.url} alt={member.name} />
						<h4>{member.name}</h4>
						<p>{member.position}</p>
					</li>
				);
			})}
		</ul>
	);
}
