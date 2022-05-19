import styled from "styled-components";

export const Cursor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	position: absolute;
	pointer-events: none;
	z-index: 1;

	&::after {
		content: "";
		width: 30px;
		height: 30px;
		position: absolute;
		border: 2px solid #ffe602;
		/* background-color: #ffe602; */
		border-radius: 50%;
		opacity: 0.5;
		top: -8px;
		left: -8px;
	}
	@keyframes cursorAnim {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(2);
			border-color: white;
		}
		100% {
			transform: scale(1);
			opacity: 0;
		}
	}
`;
