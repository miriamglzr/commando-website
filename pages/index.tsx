import type { NextPage } from "next";
//import Layout from "../Components/Layout";
import { Button } from "antd";
import Link from "next/link";
import { Page } from "../Components/Page";

const Home: NextPage = () => {
	return (
		<Page home>
			<h4>Home</h4>

			<div className="container">
				<Link href="/menu">
					<a>Menu</a>
				</Link>
				<Button type="primary">Primary</Button>
				<button className="btn btn-primary">Primary</button>
			</div>
		</Page>
	);
};

export default Home;
