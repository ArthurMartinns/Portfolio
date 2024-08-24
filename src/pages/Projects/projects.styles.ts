import styled from "styled-components";

export const Container = styled.div`
    width: 100%; 
    height: 82vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
    width: 100%;

    > div{
        border: 1px solid #fff;
        height: 28rem;
        display: flex;
        align-items: end;
    }
`

export const CardProjects = styled.div`
    border: 2px solid #fff;
`

export const Teste = styled.div`
    width: 100%;
    height: 100%;
    background-color: skyblue;
    transition: 20S;
`