import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 10rem;
`

export const Title = styled.div`
    font-size: 1.8rem;
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
    
    
    > a {
        font-size: 2.8rem;
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
    align-items: end;
    gap: 1.8rem;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const ListItems = styled.li`
    list-style: none;
    > a {
        font-weight: 600;
        font-size: 1.4rem;
        text-decoration: none;
         
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