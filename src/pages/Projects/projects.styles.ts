import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    border: 2px solid #000;
`

export const Wrapper = styled.div`
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
    width: 40rem;
    height: 40rem;
    background-color: #9d9d9d;
    position: absolute;

    > p {
        font-size: 2rem;
    }
`