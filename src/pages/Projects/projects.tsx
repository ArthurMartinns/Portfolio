import { useState } from 'react'
import Container from '../../components/Container/container.view'
import * as S from './projects.styles'

function Projects() {

  const [modal, setModal] = useState(false)

  const handleOpenModal = () => {
    setModal(!modal)
  }


    return (
      <Container>
        <S.Content>
          <S.Wrapper>
            <div>
              a
              <button onMouseOver={handleOpenModal}>Saiba mais</button>
              {modal && (
                <S.Modal>
                  <p>teste</p>
                </S.Modal>
              )}
            </div>
            <div>
              b
              <p>
                Saiba mais
              </p>
            </div>
            <div>
              c
              <p>
                Saiba mais
              </p>
            </div>
            <div>
              d
              <p>
                Saiba mais
              </p>
            </div>
          </S.Wrapper>
        </S.Content>
      </Container>
    )
  }
  
  export default Projects
  