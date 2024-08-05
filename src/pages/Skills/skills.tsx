import { FaCss3Alt, FaFigma, FaHtml5, FaLaravel, FaReact } from 'react-icons/fa'
import * as S from './skills.styles'
import { IoLogoJavascript } from 'react-icons/io'
import { SiStyledcomponents, SiTypescript } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import Container from '../../components/Container/container.view'

function Skills() {
    return (
      <Container>

        <S.Content>
          <S.Wrapper>

            <S.Left>
              <h2>Minhas Skills</h2>
              <p>*Passe o mouse nos cards e descubra*</p>
            </S.Left>

            <S.Right>

              <S.skills>
                <FaHtml5 fontSize={60} />
              </S.skills>

              <S.skills>
                <FaCss3Alt fontSize={60} />
              </S.skills>

              <S.skills>
                <IoLogoJavascript fontSize={60} />
              </S.skills>

              <S.skills>
                <FaReact fontSize={60} />
              </S.skills>

              <S.skills>
                <SiTypescript fontSize={60} />
              </S.skills>

              <S.skills>
                <RiTailwindCssFill fontSize={60} />
              </S.skills>

              <S.skills>
                <SiStyledcomponents fontSize={60} />
              </S.skills>

              <S.skills>
                <FaLaravel fontSize={60} />
              </S.skills>

              <S.skills>
                <FaFigma fontSize={60} />
              </S.skills>

            </S.Right>
          </S.Wrapper>
        </S.Content>
      </Container>
    )
  }
  
  export default Skills
  