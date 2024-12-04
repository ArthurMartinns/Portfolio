import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    height: 100%;
`

export const Wrapper = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    color: ${({ theme }) => theme.COLORS.AZUL_CLARO};

    width: 100%;
    font-size: 2rem;
    p {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.4rem;
        max-width: 420px;
    }
`

export const Right = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

`

export const cardSkills = styled.div`
    width: 200px;
    height: 200px;
    border: 2px solid #fff;
`