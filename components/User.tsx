import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarContainer, NavbarUser } from "./layout.styles";

export default function User() {
	const Icon = () => {
		let type = 1;
		switch (type) {
			case 1:
				// code block here goes the chef hat
				return <i className="fa-solid fa-hat-chef" />;
			case 2:
				return <i className="fas fa-utensils fa-2x navbar-icon" />;
			case 3:
				return <i className="far fa-user fa-2x navbar-icon" />;
			default:
				return <i className="fas fa-question fa-2x navbar-icon" />;
		}
	};

	return (
		<NavbarUser className="navbar-brand" href="/">
			<NavbarContainer className="container">
				<Icon />
				<h3 className="navbar-user-text text-white">El Pinche Jerry</h3>
			</NavbarContainer>
		</NavbarUser>
	);
}
