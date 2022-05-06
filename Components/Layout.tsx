import Link from "next/link";
import { ReactNode } from "react";
import { Navbar, NavbarLogo, ButtonCol, Sidenav } from "./layout.styles";
import User from "./User";
// import {
// 	HomeOutlined,
// 	CompassOutlined,
// 	PlayCircleOutlined,
// 	DiffOutlined,
// 	HddOutlined,
// } from "@ant-design/icons";

type DashboardLayoutProps = {
	children: ReactNode;
	home?: boolean;
};

export default function Layout({ children, home }: DashboardLayoutProps) {
	return (
		<div className="App">
			{!home && (
				<div className="backToHome">
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
			{/* <Navbar className="navbar navbar-light d-flex justify-content-between">
				<Link className="navbar-brand navbar-logo" href="/">
					<NavbarLogo>MANDO</NavbarLogo>
				</Link>
				<User />
			</Navbar> */}

			<Sidenav className="sidenav" style={{ flexDirection: "column" }}>
				<Link href="/">
					<NavbarLogo>MANDO</NavbarLogo>
				</Link>
				<Link href="/">
					<ButtonCol href="/" className="row">
						{/* <HomeOutlined
							style={{ fontSize: 25, margin: 8, cursor: "pointer" }}
						/> */}
						Home
					</ButtonCol>
				</Link>
				<Link href="/menu">
					<ButtonCol href="/menu" className="row">
						Menu
					</ButtonCol>
				</Link>
			</Sidenav>
			<div className="row d-flex justify-content-between">
				<div className="col-2" />
				<div className="col-10">
					<div style={{ minHeight: "91vh" }}>{children}</div>
					<footer className="footer">
						<p className="small">made at Harbour.Space</p>
					</footer>
				</div>
			</div>
		</div>
	);
}
