import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    padding: 4rem 0;
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
    gap: 3rem;
    animation: fadeInUp 0.8s ease-out;
`

export const WrapperAbout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    
    @media (max-width: 900px) {
        flex-direction: column;
        align-items: stretch;
    }
`

export const LeftAbout = styled.div`
    width: 100%;
    max-width: 380px;
    padding: 2.4rem;
    border-radius: 2.4rem;
    background: ${props => props.theme.colors.background.secondary};
    box-shadow: ${props => props.theme.colors.shadow.sm};
    border: 1px solid ${props => props.theme.colors.border.light};
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    img {
        width: 88px;
        height: 88px;
        border-radius: 999px;
        object-fit: cover;
        border: 3px solid ${props => props.theme.colors.primary[400]};
        margin-bottom: 0.8rem;
    }
`

export const LeftTitle = styled.h3`
    font-size: 2.0rem;
    font-weight: 600;
    color: ${props => props.theme.colors.text.primary};
`

export const LeftSubtitle = styled.p`
    font-size: 1.3rem;
    color: ${props => props.theme.colors.text.tertiary};
`

export const LeftChips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
`

export const LeftChip = styled.span`
    padding: 0.4rem 1rem;
    border-radius: 999px;
    background-color: ${props => props.theme.colors.gradient.secondary.from};
    color: ${props => props.theme.colors.text.secondary};
    font-size: 1.1rem;
`

export const LeftText = styled.p`
    font-size: 1.3rem;
    color: ${props => props.theme.colors.text.secondary};
    line-height: 1.6;
`

export const RightAbout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3rem;
    padding: 1rem;
 
    width: 100%;

    
    @media (max-width: 900px) {
        flex-wrap: wrap;
    }
`

export const RightAboutItem = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.background.primary};
    border-radius: 15px;
    padding: 3rem;
    gap: 3rem;
    width: 100%;
    text-align: justify;
    box-shadow: ${props => props.theme.colors.shadow.sm};
    border: 1px solid ${props => props.theme.colors.border.light};
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: ${props => props.theme.colors.shadow.md};
        border-color: ${props => props.theme.colors.primary[200]};
    }
`
export const RightAboutItemTop = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 1rem;

    div {
        background-color: ${props => props.theme.colors.primary[200]};
        padding: 1rem;
        border-radius: 5px;
    }

    p {
        color: ${props => props.theme.colors.text.primary};
        font-size: 1.8rem;
        font-weight: 600;
    }
`
export const RightAboutItemBottom = styled.p`
    font-size: 1.3rem;
    color: ${props => props.theme.colors.text.tertiary};
`