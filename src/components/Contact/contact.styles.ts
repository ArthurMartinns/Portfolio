import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 3rem 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5rem;

    p {
        color: ${props => props.theme.colors.text.secondary};
        font-size: 13px;
    }
`

export const ContentContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
`

export const WrapperItens = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    justify-content: space-between;

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 2rem;
    }
`

export const ItensLeft = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
    justify-content: space-between;
`

export const ItensRight = styled.div`
    width: 100%;

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    label {
        font-size: 14px;
    }

    input, textarea {
        padding: 12px 24px;
        border-radius: 8px;
        border: 1px solid rgb(182, 182, 182);
    }
`

export const Description = styled.p`
    font-size: 16px;
    color: ${props => props.theme.colors.text.secondary};
    max-width: 500px;
`

export const Socials = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: start;
`

export const SocialItens = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    color: ${props => props.theme.colors.text.secondary};

    p {
        font-size: 14px;
        color: ${props => props.theme.colors.text.secondary};
    }
    a {
        font-size: 14px;
        color: ${props => props.theme.colors.text.secondary};
        text-decoration: none;
    }
`