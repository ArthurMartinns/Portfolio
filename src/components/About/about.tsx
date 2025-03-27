import Container from '../Container/container.view'
import Title from '../Title/title'
import * as S from './about.styles'
import { IoPersonOutline } from 'react-icons/io5'
import { LuGraduationCap } from 'react-icons/lu'
import { BsSuitcaseLg } from 'react-icons/bs'

function About() {

    const RightAbout = [
        {
            title: 'Quem sou',
            icon: <IoPersonOutline color={'#2563eb'} size={18} />,
            description: 'Desenvolvedor Front end apaixonado por criar soluções inovadoras e escaláveis. Com mais de 2 anos de experiência, especializo-me em desenvolvimento web moderno, arquitetura de software e práticas ágeis.'
        },
        {
            title: 'Educação',
            icon: <LuGraduationCap color={'#2563eb'} size={18} />,
            description: 'Cursando bacharel em Engenharia de Software. Constantemente me atualizando com cursos e certificações nas tecnologias mais recentes.'
        },
        {
            title: 'Experiência',
            icon: <BsSuitcaseLg color='#2563eb' size={18} />,
            description: 'Especializado em desenvolvimento web, arquitetura de microsserviços e práticas DevOps.'
        },
    ]

    return (
        <S.AboutContainer>
            <Container>
                <S.AboutContent>
                    <Title text={'Sobre mim'} Icon={IoPersonOutline} />
                    <S.WrapperAbout>
                        <S.LeftAbout>
                            {/* <img src="me.jpeg" alt="" /> */}
                            <div />
                        </S.LeftAbout>
                        <S.RightAbout>
                            {RightAbout.map((item) => (
                                <S.RightAboutItem>
                                    <S.RightAboutItemTop>
                                        {item.icon}
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