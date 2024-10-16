import { useState } from 'react'
import Container from '../../components/Container/container.view'
import * as S from './home.styles'
import Modal from '../../components/Modal/modal'

function Home() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsModalOpen(!isModalOpen)
  }

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
                Eu sou Arthur Martins
              </S.mainText>
              <S.headline>
                Web Developer
              </S.headline>
              <S.btnHire
                onClick={toggleMenu}
              >
                Hire me
              </S.btnHire>
            </S.contentLeft>
          </S.left>
          <S.right>
            <img src="meHome.png" alt="" />
          </S.right>
        </S.wrapper>
      </S.Content>
      {isModalOpen && (
        <Modal 
          isOpen={isModalOpen} 
          handleCloseModal={() => toggleMenu()}
        />
      )}
    </Container>
  )
}

export default Home
