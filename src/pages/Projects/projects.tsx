import { useState } from 'react'
import Container from '../../components/Container/container.view'
import * as S from './projects.styles'

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
                <S.Teste>
                  .
                </S.Teste>
              )}
            </S.CardProjects>
            
            <S.CardProjects onMouseEnter={showProject2} onMouseLeave={clear2}>
              {isfront2 && (
                <S.Teste>
                  .
                </S.Teste>
              )}
            </S.CardProjects>


            <S.CardProjects onMouseEnter={showProject3} onMouseLeave={clear3}>
              {isfront3 && (
                <S.Teste>
                  .
                </S.Teste>
              )}
            </S.CardProjects>


            <S.CardProjects onMouseEnter={showProject4} onMouseLeave={clear4}>
              {isfront4 && (
                <S.Teste>
                  .
                </S.Teste>
              )}
            </S.CardProjects>
          </S.Content>
        </S.Container>
      </Container>
    )
  }
  
  export default Projects
  