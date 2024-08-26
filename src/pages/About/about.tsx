import Container from '../../components/Container/container.view'
import * as S from './about.styles'

function About() {

  return (
    <Container>
      <S.Container>
        <S.Content>
          <S.Wrapper>
            <S.Left>
              <p>teste</p>
            </S.Left>
            <S.Right>
              {/* <img src="imgAbout.png" alt="" /> */}
            </S.Right>
          </S.Wrapper>
        </S.Content>
      </S.Container>
    </Container>
  )

}

export default About
