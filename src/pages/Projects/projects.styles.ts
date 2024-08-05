import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    border: 2px solid #000;
    height: 100vh;
`

export const Wrapper = styled.div`
    height:100vh;
    align-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;

    > div {
        border: 2px solid #000;
    }
`


export const Modal = styled.div `
    width: 80vw;
    height: 80vh;
    background-color: #6d6d6d;
    position: absolute;
`