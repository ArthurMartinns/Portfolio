import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 10rem;

    background-color: ${props => props.theme.colors.background.primary};
`

export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.div`
    font-size: 1.8rem;
    color: ${props => props.theme.colors.text.primary};
    font-weight: 700;
`

export const SideMenu = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;   
    color: ${props => props.theme.colors.text.tertiary};
    background-color:  ${props => props.theme.colors.background.tertiary};
    > a {
        font-size: 2.4rem;
        text-decoration: none;
    }

    > a:hover{
        border-radius: 1rem;
    }
`


export const Close = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem 1rem;
`

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.8rem;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const ListItems = styled.li`
    list-style: none;
    > a {
        font-weight: 400;
        font-size: 1.4rem;
        text-decoration: none;
        color: ${props => props.theme.colors.text.tertiary};

        &:hover {
            color: ${props => props.theme.colors.text.primary}
        }
    }
    svg {
        font-weight: 400;
        font-size: 2rem;
        text-decoration: none;
        color: ${props => props.theme.colors.text.tertiary};

        &:hover {
            color: ${props => props.theme.colors.text.primary}
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

    @media screen and (max-width: 768px) {
        display: block;
    }
`