import { gql, useQuery } from "@apollo/client";

export const GET_ABOUT_PAGE = gql`
	query GetAboutPage {
		pages(where: { url: "/about" }) {
			sections {
				heading
				description {
					text
					html
				}
			}
		}
	}
`;

export default function AboutSections() {
	const { data } = useQuery(GET_ABOUT_PAGE);

	return (
		<ul>
			{data?.pages[0].sections.map((section) => {
				return (
					<li key={section.heading}>
						<h4>{section.heading}</h4>
						{/* //<p>{section.description.text}</p> */}
						<div
							dangerouslySetInnerHTML={{ __html: section.description.html }}
						/>
					</li>
				);
			})}
		</ul>
	);
}
