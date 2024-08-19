import Container from '../../components/Container/container.view'
import * as S from './contact.styles'

function Contact() {
    return (
      <>
        <S.Profile>
          <Container>
            <S.WrapperProfile>
              <S.BodyProfile>
                <S.ContentMain>
                  <S.Title>
                    <S.Title_h2>
                      Entre em contato
                    </S.Title_h2>
                  </S.Title>
                  <S.WrapperUserProfile>
                    <S.LeftUserProfile>
                      <S.ImgProfile>
                        <img src="me.png" alt="" />
                      </S.ImgProfile>
                      <S.BoxText>
                        <S.TitleBoxText>
                          Preencha abaixo
                        </S.TitleBoxText>
                        <S.TextBoxTxt>
                          Oportunidade de incrível de uma nova conexão
                        </S.TextBoxTxt>
                      </S.BoxText>
                    </S.LeftUserProfile>
                    <S.RightUserProfile>
                      <input type="text" placeholder='Digite seu nome:' />
                      <input type="text" placeholder='Digite o assunto:' />
                    </S.RightUserProfile>
                  </S.WrapperUserProfile>
                    <S.TitleTextArea>
                      <S.h2_TextArea>
                        Digite a mensagem abaixo: 
                      </S.h2_TextArea>
                    </S.TitleTextArea>
                    <textarea placeholder='Digite uma mensagem:' name="" id=""/>
                    <S.Button_Send>
                      ENVIAR
                    </S.Button_Send>
                </S.ContentMain>
              </S.BodyProfile>
            </S.WrapperProfile>

          </Container>
        </S.Profile>
      </>
    )
  }
  
  export default Contact
  