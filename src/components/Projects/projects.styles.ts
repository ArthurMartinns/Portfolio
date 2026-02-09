import styled from "styled-components";

export const ProjectsContainer = styled.div`
    width: 100%;
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.gradient.secondary.from};
`
export const ProjectContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
    animation: fadeInUp 0.8s ease-out;
`

export const ProjectsItens = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 2rem;
`