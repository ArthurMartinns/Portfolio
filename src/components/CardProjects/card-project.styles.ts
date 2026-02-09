import styled from "styled-components";

export const CardProjectsContainer = styled.div`
    background-color: ${props => props.theme.colors.background.primary};
    border: 2px solid ${props => props.theme.colors.background.secondary};
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: ${props => props.theme.colors.shadow.sm};
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

    &:hover {
        transform: translateY(-6px);
        box-shadow: ${props => props.theme.colors.shadow.lg};
        border-color: ${props => props.theme.colors.primary[200]};
        cursor: pointer;
    }
`

export const Image = styled.div`
    width: 100%;

    img {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        transform: scale(1);
        transition: transform 0.25s ease-out;
    }

    ${CardProjectsContainer}:hover & img {
        transform: scale(1.03);
    }
`

export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
`

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    color: ${props => props.theme.colors.text.primary};
`

export const Description = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    color: ${props => props.theme.colors.text.tertiary};
`

export const Links = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
`
export const TextLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.status.info};
    font-weight: 300;
    font-size: 1.2rem;

    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;

    svg {
        font-size: 1.4rem;
    }

    &:hover {
        text-decoration: underline;
    }
`

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 0.5rem;
`

export const Tag = styled.span`
    padding: 0.4rem 0.8rem;
    border-radius: 9999px;
    background-color: ${props => props.theme.colors.background.secondary};
    color: ${props => props.theme.colors.text.secondary};
    font-size: 1.1rem;
`