import { FaSuitcase } from 'react-icons/fa'
import Container from '../Container/container.view'
import Title from '../Title/title'
import * as S from './projects.styles'
import CardProject from '../CardProjects/card-projects'

function Projects() {
    const projetos = [
        {
            title: 'Projeto em desenvolvimento',
            description: '...',
            img: 'assets/projectsImgs.png',
            linkRepositorio: '',
            deploy: ''
        },
        {
            title: 'Projeto em desenvolvimento',
            description: '...',
            img: 'assets/projectsImgs.png',
            linkRepositorio: '',
            deploy: ''
        },
        {
            title: 'Projeto em desenvolvimento',
            description: '...',
            img: 'assets/projectsImgs.png',
            linkRepositorio: '',
            deploy: ''
        },
    ]


    return (
        <S.ProjectsContainer>
            <Container>
                <S.ProjectContent>
                    <Title Icon={FaSuitcase} text="Projetos em destaque" />
                    <S.ProjectsItens>
                        {projetos.map((projeto, index) => (
                            <CardProject
                                key={index}
                                title={projeto.title}
                                description={projeto.description}
                                img={projeto.img}
                                linkRepositorio={projeto.linkRepositorio}
                                deploy={projeto.deploy}
                            />
                        ))}
                    </S.ProjectsItens>
                </S.ProjectContent>
            </Container>
        </S.ProjectsContainer>
    )
}

export default Projects
