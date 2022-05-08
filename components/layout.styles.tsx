import styled from "styled-components";
import Link from "next/link";
import { Button } from "antd";

export const Navbar = styled.nav`
	padding: 0;
	box-shadow: 1px 1px 20px rgba(16, 13, 69, 0.15);
	height: 83px;
	background-color: white;
	display: flex;
	width: 100vw;
	min-width: 450px;
	justify-content: space-between;
	align-items: center;
`;

export const NavbarUser = styled(Link)`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 82px;
	padding: 3.6px 25.2px;
	width: 310px;
	background: #f37945;
	margin-right: 0;
	color: white !important;
	white-space: normal;
`;

export const NavbarContainer = styled.a`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 82px;
	padding: 3.6px 25.2px;
	width: 310px;
	background: #f37945 !important;
	margin-right: 0;
	color: white !important;
	white-space: normal;
`;

export const NavbarLogo = styled.a`
	font-family: IBM Plex Sans;
	font-style: normal;
	font-weight: bold;
	font-size: 26px;
	line-height: 11px;
	color: white;
	&:hover {
		color: #32403b;
	}
`;
export const ButtonCol = styled.a`
	border-style: solid;
	border-color: transparent;
	align-content: center;
	justify-content: center;
	padding: 10px;

	&:hover {
		color: #dbdbdb !important;
	}
`;

export const Sidenav = styled.div`
	height: 100%; /* 100% Full-height */
	width: 150px; /* 0 width - change this with JavaScript */
	position: fixed; /* Stay in place */
	z-index: 1; /* Stay on top */
	top: 0; /* Stay at the top */
	left: 0;
	background-color: #111; /* Black*/
	overflow-x: hidden; /*Disable horizontal scroll */
	padding-top: 40px; /* Place content 60px from the top */
	transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
`;
export const AddProduct = styled(Button)`
	max-width: 45px;
	height: 45px;
	background: #32403b;
	box-shadow: 1px 1px 2px #aaaaaa;
	border-radius: 100%;
	border: 0;
	color: #fff;
	font-size: 30px;
	align-items: center;
	line-height: 1;
	align-content: center;
	display: flex;
	justify-content: center;

	&:hover {
		background: black;
		color: white;
	}
	&:focus {
		background: black;
		color: white;
		outline: none !important;
	}
`;

export const TableDiv = styled.div`
	justify-self: center;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 100%;
	border-radius: 2px;
	margin: 2px;
	color: rgba(0, 0, 0, 0.85);
	font-size: 22px;
`;
