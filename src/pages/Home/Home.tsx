import Container from '../../components/Container/container.view'
import * as S from './home.styles'

function Home() {
  return (
    <Container>
      <S.Content>
        <S.wrapper>
          <S.left>
            <S.contentLeft>
              <S.headline>
                Olá
              </S.headline>
              <S.mainText>
                Eu sou Arthur Martins!
              </S.mainText>
              <S.headline>
                Engenheiro de Software
              </S.headline>
            </S.contentLeft>
          </S.left>
          <S.right>

          </S.right>
        </S.wrapper>
      </S.Content>
    </Container>
  )
}

export default Home
