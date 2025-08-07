import styled from "styled-components";

export const CardProjectsContainer = styled.div`
    background-color: ${props => props.theme.colors.background.primary};
    border: 2px solid ${props => props.theme.colors.background.secondary};
    width: 100%;
    max-width: 350px;
    border-radius: 20px;
`

export const Image = styled.div`
    width: 100%;

    img {
        border-radius: 20px 20px 0px 0px;
        width: 100%;
        max-height: 300px;
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
`