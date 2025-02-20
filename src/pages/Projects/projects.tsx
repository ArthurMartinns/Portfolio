import { useState } from 'react'
import Container from '../../components/Container/container.view'
import * as S from './projects.styles'
import { SiJavascript, SiReact, SiStyledcomponents, SiTypescript } from 'react-icons/si'

function Projects() {

  const [isfront, setisFront] = useState(false)
  const [isfront2, setisFront2] = useState(false)
  const [isfront3, setisFront3] = useState(false)
  const [isfront4, setisFront4] = useState(false)

  const showProject = () => {
    setisFront(!isfront)
  }

  const clear = () => {
    setisFront(false)
  }

  const showProject2 = () => {
    setisFront2(!isfront2)
  }

  const clear2 = () => {
    setisFront2(false)
  }

  const showProject3 = () => {
    setisFront3(!isfront3)
  }

  const clear3 = () => {
    setisFront3(false)
  }

  const showProject4 = () => {
    setisFront4(!isfront4)
  }

  const clear4 = () => {
    setisFront4(false)
  }

  return (
    <Container>
      <S.Container>
        <S.Content>
          <S.CardProjects onMouseEnter={showProject} onMouseLeave={clear}>
            {isfront && (
              <S.Background>
                <S.ContentCard>
                  <S.ContentCardTop>
                    <h2>
                      toDoList
                    </h2>
                    <S.rightCard>
                      <a href="/" target='blank'>Acesse o repositório</a>
                      <a href="/" target='blank'>Acesse o deploy</a>
                    </S.rightCard>
                  </S.ContentCardTop>
                  <S.ContentCardMid>
                    <p>Tecnologias utilizadas: </p>
                    <div>
                      <SiReact />
                      <SiTypescript />
                      <SiStyledcomponents />
                    </div>
                  </S.ContentCardMid>
                  <S.ContentCardBottom>
                    <div>
                      <h4>
                        Descrição:
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut, ad eveniet beatae eligendi distinctio adipisci mollitia ratione aliquam, quas vitae expedita eos, aut laborum aspernatur fugiat architecto ab! Atque?
                      </p>
                    </div>
                  </S.ContentCardBottom>
                </S.ContentCard>
              </S.Background>
            )}
          </S.CardProjects>

          <S.CardProjects onMouseEnter={showProject2} onMouseLeave={clear2}>
            {isfront2 && (
              <S.Background>
                <S.ContentCard>
                  <S.ContentCardTop>
                    <h2>
                      Landing Page
                    </h2>
                    <S.rightCard>
                      <a href="/">Acesse o repositório</a>
                      <a href="/">Acesse o deploy</a>
                    </S.rightCard>
                  </S.ContentCardTop>
                  <S.ContentCardMid>
                    <p>Tecnologias utilizadas: </p>
                    <div>
                      <SiJavascript />
                    </div>
                  </S.ContentCardMid>
                  <S.ContentCardBottom>
                    <div>
                      <h4>
                        Descrição:
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut, ad eveniet beatae eligendi distinctio adipisci mollitia ratione aliquam, quas vitae expedita eos, aut laborum aspernatur fugiat architecto ab! Atque?
                      </p>
                    </div>
                  </S.ContentCardBottom>
                </S.ContentCard>
              </S.Background>
            )}
          </S.CardProjects>

          <S.CardProjects onMouseEnter={showProject3} onMouseLeave={clear3}>
            {isfront3 && (
              <S.Background>
                <S.ContentCard>
                  <S.ContentCardTop>
                    <h2>
                      Calculadora
                    </h2>
                    <S.rightCard>
                      <a href="/">Acesse o repositório</a>
                      <a href="/">Acesse o deploy</a>
                    </S.rightCard>
                  </S.ContentCardTop>
                  <S.ContentCardMid>
                    <p>Tecnologias utilizadas: </p>
                  </S.ContentCardMid>
                  <S.ContentCardBottom>
                    <div>
                      <h4>
                        Descrição:
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut, ad eveniet beatae eligendi distinctio adipisci mollitia ratione aliquam, quas vitae expedita eos, aut laborum aspernatur fugiat architecto ab! Atque?
                      </p>
                    </div>
                  </S.ContentCardBottom>
                </S.ContentCard>
              </S.Background>
            )}
          </S.CardProjects>

          <S.CardProjects onMouseEnter={showProject4} onMouseLeave={clear4}>
            {isfront4 && (
              <S.Background>
                <S.ContentCard>
                  <S.ContentCardTop>
                    <h2>
                      Sistema de controle financeiro
                    </h2>
                    <S.rightCard>
                      <a href="/">Acesse o repositório</a>
                      <a href="/">Acesse o deploy</a>
                    </S.rightCard>
                  </S.ContentCardTop>
                  <S.ContentCardMid>
                    <p>Tecnologias utilizadas: </p>
                    <div>
                      <SiTypescript />
                    </div>
                  </S.ContentCardMid>
                  <S.ContentCardBottom>
                    <div>
                      <h4>
                        Descrição:
                      </h4>
                      <p>
                        Projeto desenvolvido com objetivo de realizar a organização financeira, controlando a entrada e saída e dinheiro. Além disso, a representação gráfica de todos os gastos.
                      </p>
                    </div>
                  </S.ContentCardBottom>
                </S.ContentCard>
              </S.Background>
            )}
          </S.CardProjects>
        </S.Content>
      </S.Container>
    </Container>
  )
}

export default Projects
