import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`   

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const Left = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    > h2 {
        font-size: 6.4rem;
        color: ${({theme}) => theme.COLORS.AZUL_CLARO};
    }

    > h3 {
        font-size: 9.6rem;
        color: ${({theme}) => theme.COLORS.AZUL_ESCURO};
    }
`

export const Right = styled.div`
`