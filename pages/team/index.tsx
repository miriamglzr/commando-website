import { Page } from "../../components/Layout/Page";
import TeamMembers from "../../components/Team/Team";

export default function Team() {
	return (
		<Page>
			<title>Mando | Team</title>
			<div className="container mw-100">
				<h4>Team</h4>
				<TeamMembers />
			</div>
		</Page>
	);
}
