import styled from "styled-components";

export const ButtonPrimary = styled.div`
    background-color:  ${props => props.theme.colors.gradient.primary.from};
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 1.5rem;
    text-align: center;
    
    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }
    color: ${props => props.theme.colors.text.inverse};
`

export const ButtonSecondary = styled.div`
    background-color:  transparent;
    color: ${props => props.theme.colors.text.primary};
    border: 1px solid ${props => props.theme.colors.border.medium};
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 1.5rem;
    text-align: center;
    
    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`