import { FaSuitcase } from 'react-icons/fa'
import Container from '../Container/container.view'
import Title from '../Title/title'
import * as S from './projects.styles'

function Projects() {
    return (
        <>
            <S.ProjectsContainer>
                <Container>
                    <S.ProjectContent>
                        <Title Icon={FaSuitcase} text={'Projetos em destaque'} />
                    </S.ProjectContent>
                </Container>
            </S.ProjectsContainer>
        </>
    )
}

export default Projects