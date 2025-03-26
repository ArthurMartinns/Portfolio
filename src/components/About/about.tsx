import { FaUser } from 'react-icons/fa6'
import Container from '../Container/container.view'
import Title from '../Title/title'
import * as S from './about.styles'

function About() {
    return (
        <S.AboutContainer>
            <Container>
                <S.AboutContent>
                    <Title text={'Sobre mim'} Icon={FaUser} />
                </S.AboutContent>
            </Container>
        </S.AboutContainer>
    )
}

export default About