import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    height: 10rem;
`

export const Title = styled.div`
    font-size: 1.8rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.WHITE};
`

export const SideMenu = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    background-color: ${({theme}) => theme.COLORS.DARK};
    width: 100%;
    height: 100vh;
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;   
    
    
    > a {
        font-size: 2.8rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        text-decoration: none;
    }

    > a:hover{
        background-color: ${({theme}) => theme.COLORS.BLACK};
        color: ${({theme}) => theme.COLORS.WHITE};
        border-radius: 1rem;
    }
`


export const Close = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem 1rem;
    color: ${({theme}) => theme.COLORS.WHITE};
`

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: end;
    gap: 1.8rem;

    @media screen and (max-width: ${breakpoints.mobileLarge}){
        display: none;
    }
`

export const ListItems = styled.li`
    list-style: none;
    > a {
        font-weight: 600;
        font-size: 1.4rem;
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.GRAY};
            &:hover {
                color: ${({theme}) => theme.COLORS.WHITE};
            }
    }
`

export const Right = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.8rem;

`

export const Responsivo = styled.div`
    display: none;

    @media screen and (max-width: ${breakpoints.mobileLarge}) {
        display: block;
    }
`