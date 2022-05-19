import { Page } from "../../components/Layout/Page";
import TeamMembers from "../../components/Team/Team";
import { gql, useQuery } from "@apollo/client";
import { GetTeamMembersQuery } from "../../generated/graphql";

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

export default function Team() {
	const { data } = useQuery<GetTeamMembersQuery>(GET_TEAM_MEMBERS);

	return (
		<Page>
			<title>Mando | Team</title>
			<div className="container mw-100">
				<h4>Our Team</h4>
				<div className="row">
					{data?.teamMembers.map((member) => (
						<TeamMembers member={member} key={member.id} />
					))}
				</div>
			</div>
		</Page>
	);
}
