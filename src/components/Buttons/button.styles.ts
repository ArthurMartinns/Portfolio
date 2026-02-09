import styled from "styled-components";

export const ButtonPrimary = styled.div`
    background-color:  ${props => props.theme.colors.gradient.primary.to};
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 1.5rem;
    text-align: center;
    transition: all 0.2s ease;
    
    &:hover {
        opacity: 0.95;
        cursor: pointer;
        transform: translateY(-1px);
        box-shadow: ${props => props.theme.colors.shadow.md};
    }
    color: ${props => props.theme.colors.text.primary};
`

export const ButtonSecondary = styled.div`
    background-color:  transparent;
    color: ${props => props.theme.colors.text.primary};
    border: 1px solid ${props => props.theme.colors.border.medium};
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 1.5rem;
    text-align: center;
    transition: all 0.2s ease;
    
    &:hover {
        opacity: 0.8;
        cursor: pointer;
        transform: translateY(-1px);
        box-shadow: ${props => props.theme.colors.shadow.sm};
    }
`