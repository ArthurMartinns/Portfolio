import Container from '../Container/container.view'
import Title from '../Title/title'
import * as S from './skills.styles'
import { FaGit, FaRegFileCode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from 'react-icons/si';
import { FiBox } from "react-icons/fi";
import { TbBrandCSharp } from "react-icons/tb";



function Skills() {

    const Skills = {
        FrontEnd: [
            { name: 'HTML', level: 100, icon: <FaHtml5 size={18} color='#2563eb' />, description: 'Estruturação semântica e acessibilidade' },
            { name: 'CSS', level: 95, icon: <FaCss3Alt size={18} color='#2563eb' />, description: 'Layouts responsivos e animações' },
            { name: 'JavaScript', level: 76, icon: <IoLogoJavascript size={18} color='#2563eb' />, description: 'ES6+, DOM, Async/Await' },
            { name: 'TypeScript', level: 88, icon: <SiTypescript size={18} color='#2563eb' />, description: 'Tipagem estática, interfaces, generics' },
            { name: 'React', level: 82, icon: <FaReact size={18} color='#2563eb' />, description: 'Hooks, Context, Redux' },
            { name: 'Tailwind Css', level: 71, icon: <RiTailwindCssFill size={18} color='#2563eb' />, description: 'Mobile-first CSS' },
            { name: 'Styled Components', level: 87, icon: <SiStyledcomponents size={18} color='#2563eb' />, description: 'CSS-in-JS' },
            { name: 'Bootstrap', level: 100, icon: <FaBootstrap size={18} color='#2563eb' />, description: 'Framework CSS' },
        ],
        BackEnd: [
            { name: 'Nodejs', level: 40, icon: <FaNodeJs size={18} color='#2563eb' />, description: 'Express, APIs RESTful' },
            { name: 'C#', level: 20, icon: <TbBrandCSharp size={18} color='#2563eb' />, description: '.NET, ASP.NET Core, Entity Framework' },
        ],
        'Controle de versão': [
            { name: 'Git', level: 92, icon: <FaGit size={18} color='#2563eb' />, description: 'Fluxo de trabalho, branches, CI/CD' }
        ],
        'Ui Libraries': [
            { name: 'Material-UI', level: 100, icon: <FiBox size={18} color='#2563eb' />, description: 'Componentes React com Material Design' },
            { name: 'Chakra UI', level: 100, icon: <FiBox size={18} color='#2563eb' />, description: 'Biblioteca de componentes acessíveis' },
        ],
    }


    return (
        <>
            <S.Container>
                <Container>
                    <S.SectionSkills>
                        <Title text={'Minhas Skills'} Icon={FaRegFileCode} />
                        <S.BottomSkills>
                            <S.BoxItensA>
                                <S.BoxItensTitle>
                                    Front - end
                                </S.BoxItensTitle>
                                {Skills.FrontEnd.map((item,) => (
                                    <>
                                        <S.BoxItensSkills>
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
                                    </>
                                ))}
                            </S.BoxItensA>
                            <S.BoxItensB>
                                <S.BoxItensTitle>
                                    Back - end
                                </S.BoxItensTitle>
                                {Skills.BackEnd.map((item,) => (
                                    <>
                                        <S.BoxItensSkills>
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
                                    </>
                                ))}
                            </S.BoxItensB>
                            <S.BoxItensC>
                                <S.BoxItensTitle>
                                    Controle de versão
                                </S.BoxItensTitle>
                                {Skills['Controle de versão'].map((item,) => (
                                    <>
                                        <S.BoxItensSkills>
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
                                    </>
                                ))}
                            </S.BoxItensC>
                            <S.BoxItensD>
                                <S.BoxItensTitle>
                                    Bibliotecas Ui
                                </S.BoxItensTitle>
                                {Skills['Ui Libraries'].map((item,) => (
                                    <>
                                        <S.BoxItensSkills>
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
                                    </>
                                ))}
                            </S.BoxItensD>
                        </S.BottomSkills>
                    </S.SectionSkills>
                </Container>
            </S.Container>
        </>
    )
}

export default Skills