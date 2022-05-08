import type { NextPage } from "next";
import { Card, Statistic } from "antd";
import Link from "next/link";
import { Page } from "../components/Page";

const { Meta } = Card;
const dashboard = [
	{
		title: "Menu",
		link: "/menu",
		color: "rgb(0, 121, 140, 0.4)",
		description: "",
		value: null,
		suffix: "",
	},
	{
		title: "Tables",
		link: "/",
		color: "rgba(247, 210, 82,0.7)",
		description: "",
		value: 3,
		suffix: "/ 10",
	},
	{
		title: "Employees",
		link: "/",
		color: "rgba(150, 193, 93, 0.5)",
		description: "",
		value: null,
		suffix: "",
	},
	{
		title: "Orders",
		link: "/",
		color: "rgba(255, 98, 91, 0.5)",
		description: "",
		value: 33,
		suffix: "orders",
	},
];

const Home: NextPage = () => {
	return (
		<Page home>
			<title>Mando</title>
			<div className="container d-flex align-items-center justify-content-center h-100">
				<div className="row" style={{ width: 480 }}>
					{dashboard.map((option, i) => {
						return (
							<Link href="/menu">
								<a className="col-md-6 col-sm-6 col-xs-12 ">
									<Card
										hoverable
										style={{
											width: 240,
											backgroundColor: `${option.color}`,
										}}
									>
										<div className=" container mt-5 pt-2 d-flex justify-content-center align-self-center">
											<Meta
												title={option.title}
												description={
													option.value ? (
														<Statistic
															value={option.value}
															suffix={option.suffix}
														/>
													) : (
														option.description
													)
												}
											/>
										</div>
									</Card>
								</a>
							</Link>
						);
					})}
				</div>
			</div>
		</Page>
	);
};

export default Home;
