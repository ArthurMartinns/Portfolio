import * as S from './skills.styles'
import Container from '../../components/Container/container.view'
import { useState } from 'react'

function Skills() {

    const [text, setText] = useState('')

    const clear = () => {
        setText('')
    }

    const onChangeFirstText = () => {
        setText(`ReactJS é uma biblioteca JavaScript de código aberto desenvolvida pelo Facebook, amplamente usada para criar interfaces de usuário (UI) em aplicações web e móveis. Ela facilita o desenvolvimento de componentes reutilizáveis e permite a construção de interfaces dinâmicas e interativas de maneira eficiente.`)
    }


    return (
        <S.Content>
            <Container>
                <S.Wrapper>
                    <S.Left>
                        Skills
                        <p>/*Passe o mouse e descubra a descrição*/</p>
                        <p>
                            {text}
                        </p>
                    </S.Left>
                    <S.Right>
                        <S.cardSkills
                            onMouseOver={onChangeFirstText}
                            onMouseLeave={clear}
                        >

                        </S.cardSkills>
                        <S.cardSkills>

                        </S.cardSkills>
                        <S.cardSkills>

                        </S.cardSkills>
                        <S.cardSkills>

                        </S.cardSkills>
                        <S.cardSkills>

                        </S.cardSkills>
                        <S.cardSkills>

                        </S.cardSkills>
                        <S.cardSkills>

                        </S.cardSkills>
                        <S.cardSkills>

                        </S.cardSkills>
                        <S.cardSkills>

                        </S.cardSkills>
                    </S.Right>
                </S.Wrapper>
            </Container>
        </S.Content>
    )
}

export default Skills