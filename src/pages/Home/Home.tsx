import Container from '../../components/Container/container.view'
import * as S from './home.styles'
function Home() {

  return (
    <Container>
      <S.Container>
        <S.Wrapper>
          <S.Left>
            <h2>Olá, meu nome é</h2>
            <h3>Arthur Martins</h3>
          </S.Left>
          <S.Right>
            <img src="meHome.png" alt="" />
          </S.Right>
        </S.Wrapper>
      </S.Container>
    </Container>
  )
}

export default Home
