import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.gradient.secondary.from};
    width: 100%;
    height: 300px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const SectionSkills = styled.div`
    border: 2px solid #000;


    display: flex;
    flex-direction: column;
    justify-content: start;
`