import Container from '../Container/container.view'
import Title from '../Title/title'
import * as S from './skills.styles'
import { FaGit, FaJava, FaRegFileCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql, SiStyledcomponents } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTypescript } from 'react-icons/si';
import { DiJavascript, DiMysql } from 'react-icons/di';
import { GiSpring } from 'react-icons/gi';

const skillGroups = [
    {
        label: 'Front-end',
        description: 'Stack principal para construir interfaces modernas.',
        skills: [
            { name: 'React', icon: <FaReact size={22} /> },
            { name: 'TypeScript', icon: <SiTypescript size={22} /> },
            { name: 'JavaScript', icon: <DiJavascript size={22} /> },
            { name: 'Tailwind', icon: <RiTailwindCssFill size={22} /> },
            { name: 'Styled Components', icon: <SiStyledcomponents size={22} /> },
            { name: 'Bootstrap', icon: <FaBootstrap size={22} /> },
        ]
    },
    {
        label: 'Back-end',
        description: 'Base para APIs, regras de negócio e integrações.',
        skills: [
            { name: 'Java', icon: <FaJava size={22} /> },
            { name: 'Spring Boot', icon: <GiSpring size={22} /> },
        ]
    },
    {
        label: 'Ferramentas & Dados',
        description: 'Controle de versão e bancos relacionais.',
        skills: [
            { name: 'Git', icon: <FaGit size={22} /> },
            { name: 'MySQL', icon: <DiMysql size={22} /> },
            { name: 'PostgreSQL', icon: <SiPostgresql size={22} /> },
        ]
    }
]

function Skills() {
    return (
        <S.Container id="skills">
            <Container>
                <S.SectionSkills>
                    <Title text={'Minhas Skills'} Icon={FaRegFileCode} />
                    <S.Layout>
                        <S.Summary>
                            <S.SummaryChip>Stack focada em produto</S.SummaryChip>
                            <S.SummaryText>
                                Tecnologias que utilizo no dia a dia para tirar ideias do papel,
                                da interface ao back-end e persistência de dados.
                            </S.SummaryText>
                        </S.Summary>

                        <S.SkillCloud>
                            {skillGroups.map(group => (
                                <S.SkillGroup key={group.label}>
                                    <S.GroupHeader>
                                        <S.GroupTitle>{group.label}</S.GroupTitle>
                                        <S.GroupSubtitle>{group.description}</S.GroupSubtitle>
                                    </S.GroupHeader>
                                    <S.SkillPillsRow>
                                        {group.skills.map(skill => (
                                            <S.SkillPill key={skill.name}>
                                                <S.SkillIconWrapper>
                                                    {skill.icon}
                                                </S.SkillIconWrapper>
                                                <span>{skill.name}</span>
                                            </S.SkillPill>
                                        ))}
                                    </S.SkillPillsRow>
                                </S.SkillGroup>
                            ))}
                        </S.SkillCloud>
                    </S.Layout>
                </S.SectionSkills>
            </Container>
        </S.Container>
    )
}

export default Skills