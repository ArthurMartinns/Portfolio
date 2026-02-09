import { FaSuitcase } from 'react-icons/fa'
import Container from '../Container/container.view'
import Title from '../Title/title'
import * as S from './projects.styles'
import CardProject from '../CardProjects/card-projects'

const projetos = [
    {
        id: 'projeto-portfolio',
        title: 'Portfólio Pessoal',
        description: 'Página de apresentação profissional com seções de sobre mim, skills, projetos e contato.',
        img: '/image.png',
        linkRepositorio: 'https://github.com/ArthurMartinns/Portfolio',
        deploy: 'https://',
        tags: ['Vite', 'React', 'Design Responsivo']
    },
    {
        id: 'projeto-chess-system-java',
        title: 'Chess System Java',
        description: 'Sistema de xadrez em Java console com design patterns e orientação a objetos.',
        linkRepositorio: 'https://github.com/ArthurMartinns/chess-system-java',
        deploy: 'https://',
        tags: ['Java', 'Design Patterns', 'Orientação a Objetos']
    },
    {
        id: 'projeto-spring-boot-mongo',
        title: 'Spring Boot com MongoDB',
        description: 'Projeto de estudo com Spring Boot e MongoDB para CRUD de posts de usuarios.',
        linkRepositorio: 'https://github.com/ArthurMartinns/spring-mongo',
        deploy: 'https://',
        tags: ['Spring Boot', 'MongoDB', 'CRUD']
    },
]

function Projects() {
    return (
        <S.ProjectsContainer id="projetos">
            <Container>
                <S.ProjectContent>
                    <Title Icon={FaSuitcase} text="Projetos em destaque" />
                    <S.ProjectsItens>
                        {projetos.map((projeto) => (
                            <CardProject
                                key={projeto.id}
                                title={projeto.title}
                                description={projeto.description}
                                linkRepositorio={projeto.linkRepositorio}
                                deploy={projeto.deploy}
                                tags={projeto.tags}
                            />
                        ))}
                    </S.ProjectsItens>
                </S.ProjectContent>
            </Container>
        </S.ProjectsContainer>
    )
}

export default Projects
