import styled from "styled-components";

export const CardProjectsContainer = styled.div`
    background-color: ${props => props.theme.colors.background.tertiary};
    border: 2px solid ${props => props.theme.colors.background.tertiary};
    width: 100%;
    max-width: 350px;
    border-radius: 20px 20px 0px 0px;
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
    gap: 1rem;
    padding: 2rem;
`

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 500;
`

export const Description = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    color: ${props => props.theme.colors.border.dark};
`