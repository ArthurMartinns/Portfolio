import Container from '../../components/Container/container.view'
import * as S from './contact.styles'

function Contact() {
    return (
      <S.Contact>
        <Container>
          <S.WrapperContact>
            <S.BackContact>
              <S.Content>
                <S.Title>
                  <h2>
                   Formulário de Contato
                  </h2>
                </S.Title>
                <S.ContentTop>

                  <S.ContentTopLeft>
                    <S.Image>
                        <img src="me.png" alt="" />
                    </S.Image>
                    <S.RightText>
                      <S.TitleRight>
                          Ficou interessado?
                      </S.TitleRight>
                      <S.ParagraphRight>
                          Preencha os campos para entrar em contato comigo!
                      </S.ParagraphRight>
                    </S.RightText>
                  </S.ContentTopLeft>

                  <S.ContentTopRight>
                    <input placeholder='Nome Completo:' type="text" />
                    <input placeholder='Email:' type="text" />
                  </S.ContentTopRight>

                </S.ContentTop>
                <S.ContentBottom>
                  <S.Title>
                    <h2>
                    Digite uma mensagem:
                    </h2>
                  </S.Title>
                  <S.Message>
                    <textarea/>
                  </S.Message>
                  <button>Enviar</button>
                </S.ContentBottom>
              </S.Content>
            </S.BackContact>
          </S.WrapperContact>
        </Container>
      </S.Contact>
    )
  }
  
  export default Contact
  