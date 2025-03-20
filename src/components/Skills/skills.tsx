import Container from '../Container/container.view'
import Title from '../Title/title'
import * as S from './skills.styles'
import { FaRegFileCode } from "react-icons/fa";



function Skills() {
    return (
        <>
            <S.Container>
                <Container>
                    <S.SectionSkills>
                        <Title text={'Minhas Skills'} Icon={FaRegFileCode}/>
                    </S.SectionSkills>
                </Container>
            </S.Container>
        </>
    )
}

export default Skills