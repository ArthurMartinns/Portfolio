import styled from "styled-components";

export const Container = styled.div`
    width: 100%; 
    height: 80vh;
    border: 1px solid ${({theme}) => theme.COLORS.WHITE};
`
export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;

    > div{
        border: 1px solid #fff;
        height: 20rem;
    }
`