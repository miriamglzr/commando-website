import styled from "styled-components";

export const Navbar = styled.div`
	height: 150;
	width: 100%;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	background-color: transparent;
	overflow-x: hidden;
	padding-top: 10px;
	transition: 0.5s;
	padding: 20px;
`;

export const NavbarLogo = styled.a`
	margin-left: 10px;
	padding-top: 10px;
	display: flex;
	color: white !important;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 11px;

	&:hover {
		color: #32403b;
	}
`;
export const ButtonCol = styled.a`
	border-style: solid;
	border-color: transparent;
	align-content: center;
	justify-content: center;
	font-weight: 500;
	padding: 0px 10px;
	color: rgba(255, 255, 255, 0.6) !important;

	&:hover {
		color: white !important;
	}
`;
