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
                        <img src="" alt="" />
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
                      <input type="text" />
                      <input type="text" />
                    </S.RightUserProfile>
                  </S.WrapperUserProfile>
                </S.ContentMain>
              </S.BodyProfile>
            </S.WrapperProfile>
          </Container>
        </S.Profile>
      </>
    )
  }
  
  export default Contact
  