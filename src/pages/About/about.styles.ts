import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Content = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color:  rgba(22, 22, 22, 0.8);
    height: 80vh;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const Right = styled.div`
    background-color: white;
    
    img {
        background-blend-mode: darken;
    }
`