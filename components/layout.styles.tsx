import styled from "styled-components";
import { Button } from "antd";

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
