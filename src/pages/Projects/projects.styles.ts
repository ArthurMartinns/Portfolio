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
        height: 25rem;
        display: flex;
        align-items: end;
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        margin: 15rem 5rem 0rem 5rem;
    }
`

export const CardProjects = styled.div`
    border: 2px solid #fff;
`

export const Teste = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(22, 22, 22, 0.8);
    padding: 2rem;
`

export const ContentCard = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 5.5rem 1fr 1fr; 
`

export const ContentCardTop = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h2 {
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 1.6rem;
    }

    a {
        color: ${({theme}) => theme.COLORS.GRAY};
        font-size: 1.2rem;
    }
`

export const ContentCardMid = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    p {
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 1.4rem;
        font-weight: 400;
    }

    div {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 0.8rem;
        
        svg {
            color: ${({theme}) => theme.COLORS.WHITE};
            font-size:  2.5rem;
        }
    }
`

export const ContentCardBottom = styled.div`

    div {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        h4 {
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.WHITE};
            font-weight: 400;;
        }
        P {
            font-size: 1.2rem;
            color: ${({theme}) => theme.COLORS.WHITE};
            text-align: justify;
            font-weight: 300;
        }
    }

`
