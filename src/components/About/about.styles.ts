import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    padding: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.background.primary};
`

export const AboutContent = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`