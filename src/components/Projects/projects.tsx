import { FaSuitcase } from 'react-icons/fa'
import Container from '../Container/container.view'
import Title from '../Title/title'
import * as S from './projects.styles'
import CardProject from '../CardProjects/card-projects'

const projetos = [
    {
        id: 'projeto-todo',
        title: 'ToDo List com React',
        description: 'Aplicação de lista de tarefas com filtros, persistência em localStorage e interface responsiva. Focada em boas práticas de estado e componentização.',
        img: 'assets/toDoList.png',
        linkRepositorio: 'https://github.com/ArthurMartinns',
        deploy: 'https://',
        tags: ['React', 'TypeScript', 'Styled Components']
    },
    {
        id: 'projeto-portfolio',
        title: 'Portfólio Pessoal',
        description: 'Página de apresentação profissional com seções de sobre mim, skills, projetos e contato, com suporte a tema claro/escuro.',
        img: 'assets/projectsImgs.png',
        linkRepositorio: 'https://github.com/ArthurMartinns',
        deploy: 'https://',
        tags: ['Vite', 'React', 'Design Responsivo']
    },
    {
        id: 'projeto-dashboard',
        title: 'Dashboard de Métricas',
        description: 'Dashboard front-end para visualização de métricas com gráficos, cards de KPIs e integração simulada com APIs.',
        img: 'assets/pcImg.avif',
        linkRepositorio: 'https://github.com/ArthurMartinns',
        deploy: 'https://',
        tags: ['React', 'Charts', 'UI/UX']
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
                                img={projeto.img}
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
