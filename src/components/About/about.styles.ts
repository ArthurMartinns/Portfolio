import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    padding: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.background.primary};
    background-color: ${props => props.theme.colors.gradient.secondary.from};
`

export const AboutContent = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.5rem;
`

export const WrapperAbout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`

export const LeftAbout = styled.div`
    width: 100%;

    div {
        width: 100%;
        height: 500px;
        border: 1px solid #000;
    }
`

export const RightAbout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
    padding: 1rem;
    width: 100%;
`

export const RightAboutItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const RightAboutItemTop = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 1rem;

    p {
        color: ${props => props.theme.colors.text.primary};
        font-size: 1.4rem;
        font-weight: 400;
    }
`
export const RightAboutItemBottom = styled.p`
    font-size: 1.2rem;
    color: ${props => props.theme.colors.text.tertiary};
`