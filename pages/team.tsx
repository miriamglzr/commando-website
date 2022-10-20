import { Page } from "../components/Layout/Page";
import TeamMembers from "../components/Team/Team";
import { GetTeamMembersQuery } from "../generated/graphql";
import { Header } from "../components/Team/styles";
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
	const valeriMember = {
		name: "Valeri",
		position: "Full Stack Web Developer",
		avatar: {
			url: "https://media.graphassets.com/bG7H1KuASEumepjhKF8Y",
			id: 888,
		},
	};
	const philippMember = {
		name: "Philipp",
		position: "Product Manager",
		avatar: {
			url: "https://media-exp1.licdn.com/dms/image/C4D03AQEikdizwCU9AA/profile-displayphoto-shrink_800_800/0/1641748326043?e=1670457600&v=beta&t=um3KdMVr0zScxPoKzh873hoqIimQTmZqetZtE2eeLLs",
			id: 987,
		},
	};
	const olegMember = {
		name: "Oleg",
		position: "Digital Marketer",
		avatar: {
			url: "https://media-exp1.licdn.com/dms/image/D4E03AQGXOygH4sq9tA/profile-displayphoto-shrink_800_800/0/1664381686107?e=1670457600&v=beta&t=ongQUYq59RG541C8L7-5Q19tKMYriHbLn8MF8NXF91A",
			id: 111,
		},
	};
	const kalistaMember = {
		name: "Kalista",
		position: "UI / UX Designer",
		avatar: {
			url: "/kalista.jpeg",
			id: 8811,
		},
	};
	const yordanMember = {
		name: "Yordan",
		position: "Backend Developer",
		avatar: {
			url: "https://media-exp1.licdn.com/dms/image/C5603AQEPUzXB4ctOBA/profile-displayphoto-shrink_800_800/0/1554303072187?e=1670457600&v=beta&t=i5XhoK1n429WbhmX7wAu1rkE9X0O0euBt5106ClW5ho",
			id: 222,
		},
	};
	const johnMember = {
		name: "John",
		position: "Finance Expert",
		avatar: {
			url: "/john.jpg",
			id: -11,
		},
	};

	return (
		<Page>
			<title>Mando | Team</title>
			<motion.div
				className="flex justify-content-center"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 20 }}
			>
				<Header>Our team</Header>
				<div
					className="row justify-content-between d-flex"
					style={{ width: 1700, maxWidth: "95vw" }}
				>
					{teamMembers.map((member) => (
						<TeamMembers member={member} key={member.id} />
					))}
					{/* <TeamMembers member={valeriMember} />
					<TeamMembers member={philippMember} />
					<TeamMembers member={olegMember} />
					<TeamMembers member={kalistaMember} />
					<TeamMembers member={yordanMember} />
					<TeamMembers member={johnMember} /> */}
				</div>
			</motion.div>
		</Page>
	);
}
