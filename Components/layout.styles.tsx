import styled from "styled-components";
import Link from "next/link";

export const Navbar = styled.nav`
	padding: 0;
	box-shadow: 1px 1px 20px rgba(16, 13, 69, 0.15);
	height: 83px;
	background-color: white;
	display: flex;
	width: 100vw;
	padding-left: 20px;
	justify-content: space-between;
	align-items: center;
`;

export const NavbarUser = styled(Link)`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 82px;
	padding: 3.6px 25.2px;
	width: 370px;
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
	width: 370px;
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
	margin-left: 36px;
	color: #32403b;
`;
