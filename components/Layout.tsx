import Image from "next/image";
import Link from "next/link";
import { ReactNode, useRef, useState } from "react";
import { NavbarLogo, ButtonCol, Sidenav } from "./layout.styles";
import { motion } from "framer-motion";
import Notification from "./Notification";

type DashboardLayoutProps = {
	children: ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
	const navRef = useRef<HTMLAnchorElement>();
	const [y, setY] = useState(-133);

	return (
		<div className="App">
			<Sidenav className="sidenav" style={{ flexDirection: "column" }}>
				<Link href="/" ref={navRef}>
					<NavbarLogo>MANDO</NavbarLogo>
				</Link>
				<Link href="/">
					<ButtonCol
						className="row"
						onMouseEnter={(event) => setY(event.currentTarget.offsetTop - 197)}
					>
						Home
					</ButtonCol>
				</Link>
				<Link href="/menu" ref={navRef}>
					<ButtonCol
						className="row"
						onMouseEnter={(event) => setY(event.currentTarget.offsetTop - 197)}
					>
						Menu
					</ButtonCol>
				</Link>
				<Link href="/tables" ref={navRef}>
					<ButtonCol
						className="row"
						onMouseEnter={(event) => setY(event.currentTarget.offsetTop - 197)}
						onClick={(event) => setY(event.currentTarget.offsetTop - 197)}
					>
						Tables
					</ButtonCol>
				</Link>
				<motion.div
					initial={{ y: navRef.current?.offsetTop, opacity: 0 }}
					animate={{ y: y, opacity: 1 }}
					style={{
						marginLeft: 10,
						justifyContent: "flex-start",
						display: "flex",
						width: "30px",
					}}
				>
					<Image
						src="/spoon.png"
						alt="spoon"
						className="spoon"
						width={30}
						height={30}
					/>
				</motion.div>
			</Sidenav>
			<div className="row d-flex justify-content-between">
				<div className="col" style={{ maxWidth: "160px" }} />
				<div className="col">
					<div
						style={{
							minHeight: "93vh",
							display: "flex",
							justifyContent: "center",
							alignContent: "center",
						}}
					>
						{children}
						<Notification />
					</div>
					<footer className="footer">
						<p className="small">made at Harbour.Space</p>
					</footer>
				</div>
			</div>
		</div>
	);
}
