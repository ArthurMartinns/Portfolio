import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    height: 82vh;
    padding-top: 5rem;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

export const Left = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 3rem;

`

export const Right = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-self: center;
    padding: 1rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        margin-top: 1rem;
    }
`

export const Itens = styled.div`
    height: 12rem;
    background-color: #141414;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.COLORS.WHITE};

    > svg {
        font-size: 4em;
    }

    &:hover {
        box-shadow: 0 0 1em gold;
    }
`

export const Text_left = styled.div`
    font-size: 2.4rem;
    color: ${({theme}) => theme.COLORS.WHITE};
`

export const P_Left = styled.div`
    font-size: 1.6rem;
    color: ${({theme}) => theme.COLORS.GRAY};
`

export const Descricao = styled.div`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 1.3rem;
    text-align: justify;
    max-width: 45rem;
`