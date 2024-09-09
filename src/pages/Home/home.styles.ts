import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
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
    justify-content: center;
`

export const right = styled.div`
    width: 70%;
`

export const headline = styled.p`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 20px;
    font-weight: 400;
`
export const mainText = styled.h1`
    font-size: 42px;
    color: ${({theme}) => theme.COLORS.AZUL_CLARO};
    font-weight: 600;
`


export const contentLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 14px;
`

export const btnHire = styled.button`
    padding: 10px 18px;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
    background-color: ${({theme}) => theme.COLORS.AZUL_ESCURO};
    color: ${({theme}) => theme.COLORS.WHITE};
    border: none;
    font-weight: 400;
`