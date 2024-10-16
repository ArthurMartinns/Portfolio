// import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Container from '../../components/Container/container.view'
import * as S from './about.styles'

function About() {

  return (
    <Container>
      <S.Container>
        <S.Content>
          <S.Wrapper>
            <S.Left>
              <S.LeftTop>
                <p>
                  Quem sou eu?
                </p>
              </S.LeftTop>

              {/* <S.LeftBottom>
                  <S.Itens>
                    <FaLinkedin/>
                  </S.Itens>
                  <S.Itens>
                    <FaGithub/>
                  </S.Itens>
                  <S.Itens>
                    <FaEnvelope/>
                  </S.Itens>
                  <S.Itens>
                    <FaWhatsapp/>
                  </S.Itens>
              </S.LeftBottom> */}

            </S.Left>
            <S.Right>
              <img src="imgAbout.png" alt="" />
            </S.Right>
          </S.Wrapper>
        </S.Content>
      </S.Container>
    </Container>
  )

}

export default About
