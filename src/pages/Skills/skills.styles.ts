import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    margin-top: 30px;
`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 80vh;
`

export const Left = styled.div`
    width: 100%;
    padding-top: 2rem;
    > h2{
        font-size: 3.2rem;
    }
    
    > p{
        font-size: 1.6rem;
    }
`

export const Right = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns:  0.5fr 0.5fr 0.5fr;
    grid-template-rows:  1fr 1fr 1fr;
    grid-gap: 1rem;

    > div {

    }
`

export const skills = styled.div`
    background-color: #D2D1D1;
    border: 2px solid ${({theme}) => theme.COLORS.AZUL_ESCURO};
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
        color: ${({theme}) => theme.COLORS.AZUL_CLARO}
    }
`