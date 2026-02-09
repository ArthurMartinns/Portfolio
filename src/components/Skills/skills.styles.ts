import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.background.tertiary};
`

export const SectionSkills = styled.div`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2.5rem;
    animation: fadeInUp 0.8s ease-out;
`

export const Layout = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 2fr);
    gap: 3.2rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`

export const Summary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    max-width: 420px;
`

export const SummaryChip = styled.span`
    align-self: flex-start;
    padding: 0.4rem 1.2rem;
    border-radius: 9999px;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    color: ${props => props.theme.colors.primary[700]};
    background: rgba(99, 102, 241, 0.06);
    border: 1px solid rgba(129, 140, 248, 0.4);
`

export const SummaryText = styled.p`
    font-size: 1.45rem;
    line-height: 1.7;
    color: ${props => props.theme.colors.text.secondary};
`

export const SkillCloud = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`

export const SkillGroup = styled.div`
    padding: 1.6rem 1.8rem;
    border-radius: 1.4rem;
    background-color: ${props => props.theme.colors.background.secondary};
    border: 1px solid ${props => props.theme.colors.border.light};
`

export const GroupHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 1.4rem;
`

export const GroupTitle = styled.h3`
    font-size: 1.55rem;
    font-weight: 600;
    color: ${props => props.theme.colors.text.primary};
`

export const GroupSubtitle = styled.p`
    font-size: 1.25rem;
    color: ${props => props.theme.colors.text.tertiary};
`

export const SkillPillsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`

export const SkillPill = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.7rem 1.2rem;
    border-radius: 9999px;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.text.secondary};
    background-color: ${props => props.theme.colors.background.primary};
    border: 1px solid ${props => props.theme.colors.border.light};

    span {
        white-space: nowrap;
    }
`

export const SkillIconWrapper = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 9999px;
    background: radial-gradient(circle at 30% 0,
        ${props => props.theme.colors.primary[400]},
        ${props => props.theme.colors.primary[600]});
    color: ${props => props.theme.colors.text.inverse};

    svg {
        width: 1.6rem;
        height: 1.6rem;
    }
`