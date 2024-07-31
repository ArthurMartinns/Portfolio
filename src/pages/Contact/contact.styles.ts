import styled from "styled-components";

export const Contact = styled.div`
    width: 100%;
`
export const WrapperContact = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2.8rem;    
`

export const BackContact = styled.div`
    padding: 2.8rem;
    width: 100%;
    border-radius: .8rem;
    background-color: #BDD5FF;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`

export const Title = styled.div`
    border-bottom: 2px solid ${({theme}) => theme.COLORS.BLACK};
    width: 100%;
    padding-bottom: .6rem;
    > h2 {
        font-size: 2rem;
        color: ${({theme}) => theme.COLORS.BLACK}
    }
`

export const ContentTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3.2rem;
`

export const ContentBottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.2rem;

    > button {
    font-weight: bold;
	color: ${({theme}) => theme.COLORS.WHITE};
	border: none;
	padding: 16px 24px;
	border-radius: 8px;
	transition: 20ms ease-in-out;
	background: ${({theme}) => theme.COLORS.AZUL_ESCURO};
    }
`

export const ContentTopLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3.2rem;
    width: 100%;
    max-width: 45rem;
`

export const Image = styled.div`
    width: 100%;
	max-width: 20rem;
	height: 20rem;
	cursor: pointer;

	> img {
		border-radius: 1.6rem;
        width: 20rem;
	}
`

export const RightText = styled.div`
	width: 100%;
	max-width: 186px;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`

export const TitleRight = styled.p`
	color: #000000;
	font-size: 16px;
	font-weight: 700;
    `

export const ParagraphRight = styled.p`
	color: ${({theme}) => theme.COLORS.BLACK};
	font-size: 13px;
	font-weight: 400;
    `

export const ContentTopRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    width: 100%;

    > input {
        width: 100%;
        background-color: transparent;
        border-radius: 0.6rem;
        padding: 2rem;
        border: 2px solid ${({theme}) => theme.COLORS.BLACK};
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.AZUL_ESCURO}
    }
`

export const Message = styled.div`
    width: 100%;

    > textarea {
        background-color: transparent;
        border: 2px solid ${({theme}) => theme.COLORS.BLACK};
        height: 15rem;
        width: 100%;
        padding: 2rem;
    }
`