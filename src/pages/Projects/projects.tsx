import { useState } from 'react'
import Container from '../../components/Container/container.view'
import * as S from './projects.styles'

function Projects() {

  const [isfront, setisFront] = useState(false)

  const showProject = () => {
    setisFront(!isfront)
  }

    return (
      <Container>
        <S.Container>
          <S.Content>
            <S.CardProjects onMouseEnter={showProject}>
              {isfront && (
                <S.Teste>
                  .
                </S.Teste>
              )}
            </S.CardProjects>
            <S.CardProjects>
              
            </S.CardProjects>
            <S.CardProjects>
              
            </S.CardProjects>
            <S.CardProjects>
              
            </S.CardProjects>
          </S.Content>
        </S.Container>
      </Container>
    )
  }
  
  export default Projects
  