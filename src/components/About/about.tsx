import Container from '../Container/container.view'
import Title from '../Title/title'
import * as S from './about.styles'
import { IoPersonOutline } from 'react-icons/io5'
import { LuGraduationCap } from 'react-icons/lu'
// import { BsSuitcaseLg } from 'react-icons/bs'

const rightAboutContent = [
    {
        title: 'Quem sou',
        icon: <IoPersonOutline color={'#4f46e5'} size={20} />,
        description: 'Meu nome é Arthur, sou um desenvolvedor front-end apaixonado por tecnologia e inovação. Gosto de criar interfaces intuitivas e funcionais, buscando sempre a melhor experiência para os usuários. Tenho experiência sólida no desenvolvimento web e estou sempre em busca de aprimoramento contínuo.'
    },
    {
        title: 'Educação',
        icon: <LuGraduationCap color={'#4f46e5'} size={20} />,
        description: 'Atualmente, estudo Engenharia de Software na PUC Minas, onde aprofundo meus conhecimentos em arquitetura de sistemas, desenvolvimento de software e boas práticas da engenharia. Antes disso, concluí um curso técnico integrado em Tecnologia no Colégio Cotemig, onde desenvolvi uma base sólida em programação.'
    },
    // {
    //     title: 'Experiência',
    //     icon: <BsSuitcaseLg color='#4f46e5' size={20} />,
    //     description: 'Atuo há mais de dois anos como desenvolvedor front-end, construindo interfaces modernas, performáticas e responsivas. Estou sempre atento às novas tendências do mercado e procuro evoluir constantemente para entregar produtos de alta qualidade.'
    // },
]

function About() {
    return (
        <S.AboutContainer id="sobre">
            <Container>
                <S.AboutContent>
                    <Title text={'Sobre mim'} Icon={IoPersonOutline} />
                    <S.WrapperAbout>
                        <S.LeftAbout>
                            <img src="/me(1).jpeg" alt="Foto de Arthur Martins" />
                            <S.LeftTitle>
                                Engenheiro de Software & Desenvolvedor Front-end
                            </S.LeftTitle>
                            <S.LeftSubtitle>
                                Focado em criar experiências digitais modernas, acessíveis e com código bem estruturado.
                            </S.LeftSubtitle>
                            <S.LeftChips>
                                <S.LeftChip>React & TypeScript</S.LeftChip>
                                <S.LeftChip>UI/UX focado em detalhe</S.LeftChip>
                                <S.LeftChip>Boas práticas e clean code</S.LeftChip>
                            </S.LeftChips>
                            <S.LeftText>
                                Hoje, meu foco é transformar ideias em interfaces funcionais e agradáveis, unindo design,
                                performance e qualidade de código — sempre com aprendizado contínuo e colaboração.
                            </S.LeftText>
                        </S.LeftAbout>
                        <S.RightAbout>
                            {rightAboutContent.map((item) => (
                                <S.RightAboutItem key={item.title}>
                                    <S.RightAboutItemTop>
                                        <div>
                                            {item.icon}
                                        </div>
                                        <p>
                                            {item.title}
                                        </p>
                                    </S.RightAboutItemTop>
                                    <S.RightAboutItemBottom>
                                        {item.description}
                                    </S.RightAboutItemBottom>
                                </S.RightAboutItem>
                            ))}
                        </S.RightAbout>
                    </S.WrapperAbout>
                </S.AboutContent>
            </Container>
        </S.AboutContainer>
    )
}

export default About