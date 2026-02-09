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

const skillsData = {
    FrontEnd: [
        { name: 'React', level: 82, icon: <FaReact size={18} color='#2563eb' />, description: 'Hooks, Context, Redux' },
        { name: 'TypeScript', level: 90, icon: <SiTypescript size={18} color='#2563eb' />, description: 'Tipagem estática, interfaces, generics' },
        { name: 'JavaScript', level: 77, icon: <DiJavascript size={18} color='#2563eb' />, description: 'ES6+, manipulação de DOM, boas práticas' },
        { name: 'Tailwind Css', level: 71, icon: <RiTailwindCssFill size={18} color='#2563eb' />, description: 'Mobile-first CSS' },
        { name: 'Styled Components', level: 87, icon: <SiStyledcomponents size={18} color='#2563eb' />, description: 'CSS-in-JS' },
        { name: 'Bootstrap', level: 68, icon: <FaBootstrap size={18} color='#2563eb' />, description: 'Framework CSS' },
    ],
    BackEnd: [
        { name: 'Java', level: 40, icon: <FaJava size={18} color='#2563eb' />, description: 'Desenvolvimento de aplicativos empresariais e sistemas escaláveis' },
        { name: 'Spring Boot', level: 40, icon: <GiSpring size={18} color='#2563eb' />, description: 'Framework Java para aplicações back-end rápidas e escaláveis' },

    ],
    'Controle de versão': [
        { name: 'Git', level: 92, icon: <FaGit size={18} color='#2563eb' />, description: 'Fluxo de trabalho, branches, CI/CD' },
        { name: 'MySQL', level: 55, icon: <DiMysql size={18} color='#2563eb' />, description: 'Sistema de banco de dados relacional de código aberto' },
        { name: 'PostgreSQL', level: 67, icon: <SiPostgresql size={18} color='#2563eb' />, description: 'Banco de dados relacional avançado com suporte a dados não estruturados' },
    ],
}

function Skills() {
    return (
        <>
            <S.Container id="skills">
                <Container>
                    <S.SectionSkills>
                        <Title text={'Minhas Skills'} Icon={FaRegFileCode} />
                        <S.BottomSkills>
                            <S.BoxItensA>
                                <S.BoxItensTitle>
                                    Front-end
                                </S.BoxItensTitle>
                                {skillsData.FrontEnd.map((item) => (
                                    <S.BoxItensSkills key={item.name}>
                                        <S.BoxItensSkillsRow>
                                            <S.BoxItensSkillsRowLeft>
                                                {item.icon}
                                                <p>
                                                    {item.name}
                                                </p>
                                            </S.BoxItensSkillsRowLeft>
                                            <span>
                                                {item.level}%
                                            </span>
                                        </S.BoxItensSkillsRow>
                                        <S.ProgressBarContainer>
                                            <S.ProgressBarFill width={item.level} />
                                        </S.ProgressBarContainer>
                                        <S.Description>
                                            {item.description}
                                        </S.Description>
                                    </S.BoxItensSkills>
                                ))}
                            </S.BoxItensA>
                            <S.BoxItensB>
                                <S.BoxItensTitle>
                                    Back-end e Banco de Dados
                                </S.BoxItensTitle>
                                {skillsData.BackEnd.map((item) => (
                                    <S.BoxItensSkills key={item.name}>
                                        <S.BoxItensSkillsRow>
                                            <S.BoxItensSkillsRowLeft>
                                                {item.icon}
                                                <p>
                                                    {item.name}
                                                </p>
                                            </S.BoxItensSkillsRowLeft>
                                            <span>
                                                {item.level}%
                                            </span>
                                        </S.BoxItensSkillsRow>
                                        <S.ProgressBarContainer>
                                            <S.ProgressBarFill width={item.level} />
                                        </S.ProgressBarContainer>
                                        <S.Description>
                                            {item.description}
                                        </S.Description>
                                    </S.BoxItensSkills>
                                ))}
                            </S.BoxItensB>
                            <S.BoxItensC>
                                <S.BoxItensTitle>
                                    Controle de versão e Banco de Dados
                                </S.BoxItensTitle>
                                {skillsData['Controle de versão'].map((item) => (
                                    <S.BoxItensSkills key={item.name}>
                                        <S.BoxItensSkillsRow>
                                            <S.BoxItensSkillsRowLeft>
                                                {item.icon}
                                                <p>
                                                    {item.name}
                                                </p>
                                            </S.BoxItensSkillsRowLeft>
                                            <span>
                                                {item.level}%
                                            </span>
                                        </S.BoxItensSkillsRow>
                                        <S.ProgressBarContainer>
                                            <S.ProgressBarFill width={item.level} />
                                        </S.ProgressBarContainer>
                                        <S.Description>
                                            {item.description}
                                        </S.Description>
                                    </S.BoxItensSkills>
                                ))}
                            </S.BoxItensC>
                        </S.BottomSkills>
                    </S.SectionSkills>
                </Container>
            </S.Container>
        </>
    )
}

export default Skills