import Link from "next/link";
import { ReactNode } from "react";
import { Navbar, NavbarLogo } from "./layout.styles";
import User from "./User";

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
			<Navbar className="navbar navbar-light d-flex justify-content-between">
				<Link className="navbar-brand navbar-logo" href="/">
					<NavbarLogo>MANDO</NavbarLogo>
				</Link>
				<User />
			</Navbar>
			<div>{children}</div>
			<footer className="footer">
				<p>made at Harbour.Space</p>
			</footer>
		</div>
	);
}
