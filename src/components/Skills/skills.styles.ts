import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SectionSkills = styled.div`
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 3rem;
`

export const BottomSkills = styled.div`
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
        "A B"
        "A C"
        "A D";
    grid-gap: 2rem; */

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const BoxItensA = styled.div`
   background-color: ${props => props.theme.colors.gradient.secondary.from};
    padding: 3rem;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    grid-area: A;
`
export const BoxItensB = styled.div`
    background-color: ${props => props.theme.colors.gradient.secondary.from};
    padding: 3rem;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    grid-area: B;
`
export const BoxItensC = styled.div`
    background-color: ${props => props.theme.colors.gradient.secondary.from};
    padding: 3rem;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    grid-area: C;
`
export const BoxItensD = styled.div`
    background-color: ${props => props.theme.colors.gradient.secondary.from};
    padding: 3rem;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    grid-area: D;
`
export const BoxItensTitle = styled.h2`
    font-size: 1.8rem;
`

export const BoxItensSkills = styled.h2`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const BoxItensSkillsRow = styled.h2`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
        font-size: 1.4rem;
        color: ${props => props.theme.colors.text.tertiary};
    }
`
export const BoxItensSkillsRowLeft = styled.h2`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    p{
        font-size: 1.4rem;
    }
`

export const ProgressBarContainer = styled.div`
  height: .8rem; 
  background-color: #f3f4f6; 
  border-radius: 9999px; 
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ width: number }>`
  height: 100%;
  background: linear-gradient(to right, #2563eb, #3b82f6); 
  border-radius: 9999px; 
  transition: width 0.5s ease-in-out; 
  width: ${({ width }) => width}%;
`;

export const Description = styled.p`
    font-size: 1.2rem;
    color: ${props => props.theme.colors.text   .tertiary};
`

export const LeftSkillsDescriptions = styled.div`
    width: 100%;
    height: 300px;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    p {
        color: ${props => props.theme.colors.text.secondary};
        font-size: 1.3rem;
        max-width: 500px;
    }
`

export const RightSkillsItens = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
`

export const BoxSkilss = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    gap: 1rem;
    background-color: ${props => props.theme.colors.primary[100]};
    border-radius: 4px;
    padding: 2rem;
    width: 100%;
    max-width: 150px;

    svg {
        font-size: 50px;
        color: ${props => props.theme.colors.gradient.primary.from};
    }

    &:hover {
        box-shadow: 10px 5px 5px ${props => props.theme.colors.primary[200]};
        transition: 0.3s;
    }

`