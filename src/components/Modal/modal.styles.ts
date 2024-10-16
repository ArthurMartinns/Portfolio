import styled from "styled-components";

export const Modal = styled.div`
    position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 3rem;
	background-color: #fff;
	width: 50%;
`

export const HeaderModal = styled.div`
	width: 100%;
	
	display:flex;
	flex-direction: row;
	justify-content: space-between;
`

export const Title = styled.p`
	font-size: 16px;
`

export const Close = styled.button`
	background-color: transparent;
	border: none;
	font-size: 13px;
`

export const ContentModal = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`
