import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
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
                <p>
                  Sobre
                </p>
                <p>
                  Desenvovledor Back - End
                </p>
              </S.LeftTop>

              <S.LeftMid>
                <p>
                  Olá, meu nome é Arthur Martins. Possuo conhecimento em diversas tecnologias, dentre elas, destaca - se a criação de interfaces web com react, styled components, tailwindCSS, TypeScript. E também, o desenvolvimento de Apis, com o C# juntamente com o auxílio do .Net. Atualmente, estou realizando o curso de Sistemas da Informação, que vem contribuindo bastante com o aprendizado dessas skills. Além disso, cursos extracurriculares que ajudam no enriquecimento.
                </p>
              </S.LeftMid>

              <S.LeftBottom>
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
              </S.LeftBottom>

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
