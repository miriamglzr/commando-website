import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { Page } from "../../Components/Page";

export const getStaticProps = async () => {
	// Pass data to the page via props
	return { props: { menu: ["banana", "coffee"] } };
};

export default function Menu({
	menu,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Page>
			<Link href="/">
				<a>Go back</a>
			</Link>
			<h4>Menu</h4>
		</Page>
	);
}
