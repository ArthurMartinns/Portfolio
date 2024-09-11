import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    height: 70vh;
`   
export const wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`

export const left = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
`

export const right = styled.div`
    width: 70%;

    display: flex;
    align-items: end;
    justify-content: end;

    > img {
        width: 20rem;
    }
`

export const headline = styled.p`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 2.4rem;
    font-weight: 600;
`
export const mainText = styled.h1`
    font-size: 4.6rem;
    color: ${({theme}) => theme.COLORS.AZUL_CLARO};
    font-weight: 600;
`


export const contentLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.4rem;
`

export const btnHire = styled.button`
    padding: 1rem 1.8rem;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    cursor: pointer;
    background-color: ${({theme}) => theme.COLORS.AZUL_ESCURO};
    color: ${({theme}) => theme.COLORS.WHITE};
    border: none;
    font-weight: 600;
`