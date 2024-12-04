import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Header = styled.div`
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 10.8rem;
`

export const Left = styled.div`
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.AZUL_CLARO};
    font-size: 1.8rem;
`

export const Right = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    list-style: none;

    @media (max-width: ${breakpoints.mobileLarge}) {
        display: none;
    }
`

export const Links = styled.li`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Menu = styled.div`
    background-color: #123;
    height: 100%;
    width: 50%;
    position: absolute;
    right: 0;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Responsivo = styled.div`
    display: none;
    cursor: pointer;

    @media (max-width: ${breakpoints.mobileLarge}) {
        display: block;
    }
`

export const SubItens = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

export const LinksResponsivo = styled.li`
    list-style: none;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
`
