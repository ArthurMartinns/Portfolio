import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`

export const Title = styled.div`
    font-size: 2.2rem;
    color: ${props => props.theme.colors.text.primary};
    font-weight: bold;
`