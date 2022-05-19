import AboutSections from "../../components/About/AboutSections";
import { Page } from "../../components/Layout/Page";
import { gql, request } from "graphql-request";
import { GetAboutPageQuery } from "../../generated/graphql";

const gqlUrl =
	"https://api-eu-central-1.graphcms.com/v2/cl345fns355od01xqgs8ugfv9/master";

export const GET_ABOUT_PAGE = gql`
	query GetAboutPage {
		pages(where: { url: "/about" }) {
			sections {
				heading
				description {
					text
					html
				}
				image {
					url
				}
			}
		}
	}
`;

export async function getStaticProps() {
	const data = await request<GetAboutPageQuery>(gqlUrl, GET_ABOUT_PAGE);

	return {
		props: {
			sections: data.pages[0].sections,
		},
	};
}

export default function About({ sections }) {
	console.log(sections);
	return (
		<Page>
			<title>Mando | About</title>
			<div className="container mw-100">
				<h4>About</h4>
				{sections.map((section) => (
					<AboutSections section={section} />
				))}
			</div>
		</Page>
	);
}
