import Link from "next/link";
import { ReactNode } from "react";
import { NavbarLogo, ButtonCol, Navbar } from "./styles";
import { useRouter } from "next/router";

type DashboardLayoutProps = {
	children: ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
	const router = useRouter();
	console.log(router.pathname);
	return (
		<div className="App">
			<div
				className=" d-flex justify-content-between "
				style={{ minWidth: "100vw" }}
			>
				<Navbar className="Navbar row">
					<div className="col d-flex">
						<Link href="/">
							<NavbarLogo>MANDO</NavbarLogo>
						</Link>
						<div className="col d-flex justify-content-end mr-5">
							<Link href="/about">
								<ButtonCol>About_</ButtonCol>
							</Link>
							<Link href="/team">
								<ButtonCol>We Are Mando_</ButtonCol>
							</Link>
						</div>
					</div>
				</Navbar>

				<div
					className="row w-100"
					style={
						router.pathname === "/"
							? {
									overflow: "hidden",
									minHeight: "100vh",
							  }
							: {}
					}
				>
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
					</div>
				</div>
			</div>
		</div>
	);
}
