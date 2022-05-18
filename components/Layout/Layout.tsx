import Link from "next/link";
import { ReactNode } from "react";
import { NavbarLogo, ButtonCol, Navbar } from "./styles";
import Notification from "../Notification";

type DashboardLayoutProps = {
	children: ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
	return (
		<div className="App">
			<div className=" d-flex justify-content-between">
				<Navbar className="Navbar row">
					<div className="col d-flex">
						<Link href="/">
							<NavbarLogo>Mando</NavbarLogo>
						</Link>
						<div className="col d-flex justify-content-end mr-5">
							<Link href="/order">
								<ButtonCol>Order_</ButtonCol>
							</Link>
							<Link href="/about">
								<ButtonCol>About_</ButtonCol>
							</Link>
							<Link href="/team">
								<ButtonCol>We Are Mando_</ButtonCol>
							</Link>
						</div>
					</div>
				</Navbar>

				<div className="row w-100">
					<div
						style={{
							minHeight: "90vh",
							display: "flex",
							justifyContent: "center",
							alignContent: "center",
							paddingTop: "10vh",
						}}
					>
						{children}
						<Notification />
					</div>
					<footer className="footer">
						<p className="small" style={{ color: "rgba(255, 255, 255, 0.79)" }}>
							made at Harbour.Space
						</p>
					</footer>
				</div>
			</div>
		</div>
	);
}
