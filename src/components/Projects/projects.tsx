import { FaSuitcase } from 'react-icons/fa'
import Container from '../Container/container.view'
import Title from '../Title/title'
import * as S from './projects.styles'
import CardProject from '../CardProjects/card-projects'

function Projects() {
    const projetos = [
        {
            title: 'Finanças',
            description: 'Uma plataforma web para controle financeiro pessoal, permitindo acompanhar receitas, despesas e gerar relatórios detalhados para melhor planejamento financeiro.',
            img: 'assets/bgProjects.png'
        },
        {
            title: 'Ecommerce',
            description: 'Um sistema de e-commerce moderno e responsivo, com catálogo de produtos, carrinho de compras, checkout seguro e integração com meios de pagamento.',
            img: 'assets/bgProjects.png'
        },
        {
            title: 'Landing Page',
            description: 'Uma landing page otimizada para conversão, com design moderno, responsivo e elementos interativos para apresentar serviços ou produtos de forma atraente.',
            img: 'assets/bgProjects.png'
        },
        {
            title: 'Finanças',
            description: 'Uma plataforma web para controle financeiro pessoal, permitindo acompanhar receitas, despesas e gerar relatórios detalhados para melhor planejamento financeiro.',
            img: 'assets/bgProjects.png'
        },
        {
            title: 'Ecommerce',
            description: 'Um sistema de e-commerce moderno e responsivo, com catálogo de produtos, carrinho de compras, checkout seguro e integração com meios de pagamento.',
            img: 'assets/bgProjects.png'
        },
        {
            title: 'Landing Page',
            description: 'Uma landing page otimizada para conversão, com design moderno, responsivo e elementos interativos para apresentar serviços ou produtos de forma atraente.',
            img: 'assets/bgProjects.png'
        }
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
                            />
                        ))}
                    </S.ProjectsItens>
                </S.ProjectContent>
            </Container>
        </S.ProjectsContainer>
    )
}

export default Projects
