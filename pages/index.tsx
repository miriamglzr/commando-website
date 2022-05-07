import type { NextPage } from "next";
import { Card, Statistic } from "antd";
import Link from "next/link";
import { Page } from "../Components/Page";

const { Meta } = Card;

const Home: NextPage = () => {
	return (
		<Page home>
			<title>Mando</title>
			<div className="container mt-5">
				<div className="row d-flex justify-content-center mt-5 pt-4">
					<Card
						hoverable
						style={{
							width: 240,
							backgroundColor: "rgb(0, 121, 140, 0.4)",
							display: "flex",
							justifyContent: "center",
							alignContent: "center",
						}}
					>
						<Meta title="Menu" description="" />
					</Card>
					<Card
						hoverable
						style={{ width: 240, backgroundColor: "rgba(247, 210, 82,0.7)" }}
					>
						<Meta
							title="Tables"
							description={<Statistic value={3} suffix="/ 10" />}
						/>
					</Card>
				</div>
				<div className="row d-flex justify-content-center">
					<Card
						hoverable
						style={{ width: 240, backgroundColor: "rgba(150, 193, 93, 0.5)" }}
					>
						<Meta title="Employees" description="" />
					</Card>
					<Card
						hoverable
						style={{ width: 240, backgroundColor: "rgba(255, 98, 91, 0.5)" }}
					>
						<Meta
							title="Orders"
							description={<Statistic value={33} suffix="orders" />}
						/>
					</Card>
				</div>
			</div>
		</Page>
	);
};

export default Home;
