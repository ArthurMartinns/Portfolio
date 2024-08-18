import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    padding-top: 2rem;
    height: 12.0rem;
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
    background-color: #D9D9D9;
    width: 100%;
    height: 100vh;
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;   
    
    
    > a {
        font-size: 3.6rem;
    }

    > a:hover{
        background-color: #000;
        color: ${({theme}) => theme.COLORS.WHITE};
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
    align-items: end;
    gap: 1.8rem;
`

export const ListItems = styled.li`
    list-style: none;
    > a {
        font-weight: 600;
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.GRAY};
    }
`

export const Right = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.8rem;

`
