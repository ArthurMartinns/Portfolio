import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    padding:2rem;
`

export const Title = styled.div`
    font-size: 2.4rem;
    font-weight: bold;
    color: ${({theme}) => theme.COLORS.AZUL_ESCURO};
`

export const SideMenu = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    background-color: #D9D9D9;
    width: 30rem;
    height: 100vh;
    transition: 0.8S;
`