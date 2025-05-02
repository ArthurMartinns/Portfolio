import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

`

export const Main = styled.div`
    width: 100%;
    height: 650px;

    background-color: ${props => props.theme.colors.background.tertiary};


    @media (max-width: 800px) {
        margin-top: 3rem;
    }
`

export const SectionHero = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const SectionHeroLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 700px;
    width: 100%;
`

export const Title = styled.div`
    font-size: 4.2rem;
    font-weight: bold;
    color: ${props => props.theme.colors.text.primary};

    strong {
        color: ${props => props.theme.colors.gradient.primary.from};
    }

    @media (max-width: 800px) {
        font-size: 3.8rem;
    }
`


export const Subtitle = styled.div`
    font-size: 2rem;
    color: ${props => props.theme.colors.text.secondary};
    
`
export const WrapperButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    @media (max-width: 550px) {
        flex-direction: column;
        align-items: start;
        :last-child {
            width: 100%;
        }

        :first-child {
            width: 100%;
        }
    }
`

export const SectionRight = styled.div`
    img {
        border-radius: 20px;
        width: 100%;
        max-width: 450px;
        margin-top: 2rem;
    }
`