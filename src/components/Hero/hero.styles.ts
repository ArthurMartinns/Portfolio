import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: radial-gradient(circle at top left,
            ${props => props.theme.colors.gradient.secondary.from} 0%,
            ${props => props.theme.colors.background.primary} 45%,
            ${props => props.theme.colors.background.primary} 100%);
`

export const Main = styled.div`
    width: 100%;
    min-height: calc(100vh - 8rem);
    padding: 10rem 0 6rem;

    display: flex;
    align-items: center;

    animation: fadeInUp 0.8s ease-out;

    @media (max-width: 800px) {
        margin-top: 3rem;
        padding: 8rem 0 4rem;
    }
`

export const SectionHero = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 3.2rem;

    padding: 3.2rem 3.2rem;
    border-radius: 1.8rem;
    background-color: ${props => props.theme.colors.background.secondary};
    box-shadow: ${props => props.theme.colors.shadow.lg};
    border: 1px solid ${props => props.theme.colors.border.light};

    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
        padding: 2.4rem 2rem;
    }
`

export const SectionHeroLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    max-width: 680px;
    width: 100%;
`

export const HighlightBadge = styled.span`
    align-self: flex-start;
    padding: 0.6rem 1.4rem;
    border-radius: 9999px;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.03em;
    text-transform: uppercase;

    display: inline-flex;
    align-items: center;
    gap: 0.8rem;

    color: ${props => props.theme.colors.primary[700]};
    background: rgba(99, 102, 241, 0.08);
    border: 1px solid rgba(129, 140, 248, 0.4);
`

export const BadgeDot = styled.span`
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 9999px;
    background: linear-gradient(
        135deg,
        ${props => props.theme.colors.primary[400]},
        ${props => props.theme.colors.primary[600]}
    );
    box-shadow: 0 0 0 4px rgba(129, 140, 248, 0.25);
`

export const Title = styled.h1`
    font-size: 4.4rem;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.03em;
    color: ${props => props.theme.colors.text.primary};

    strong {
        color: ${props => props.theme.colors.gradient.primary.to};
    }

    @media (max-width: 800px) {
        font-size: 3.4rem;
    }
`

export const Subtitle = styled.p`
    font-size: 1.7rem;
    line-height: 1.6;
    color: ${props => props.theme.colors.text.secondary};
    max-width: 52rem;
`

export const MetaRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`

export const MetaItem = styled.div`
    padding: 0.7rem 1.4rem;
    border-radius: 9999px;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.text.tertiary};
    background-color: ${props => props.theme.colors.background.tertiary};
    border: 1px dashed ${props => props.theme.colors.border.medium};
`

export const WrapperButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.6rem;

    @media (max-width: 550px) {
        flex-direction: column;
        align-items: stretch;

        > * {
            width: 100%;
        }
    }
`

export const SectionRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
        border-radius: 2rem;
        width: 100%;
        max-width: 420px;
        margin-top: 0.8rem;
        object-fit: cover;
        box-shadow: ${props => props.theme.colors.shadow.lg};
        border: 1px solid rgba(148, 163, 184, 0.4);
        transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
    }

    img:hover {
        transform: translateY(-4px) scale(1.02);
        box-shadow: 0 30px 60px rgba(15, 23, 42, 0.35);
        filter: saturate(1.05);
    }
`