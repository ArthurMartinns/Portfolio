import * as S from './container.styles'
import { ContainerProps } from './container.types'

function Container({
    children
}: ContainerProps) {
    return(
        <S.Container>
            {children}
        </S.Container>
    )
}

export default Container