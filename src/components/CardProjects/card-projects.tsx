import { CardProjectsEnum, CardProjectsProps } from './card-project.types'
import * as S from './card-project.styles'

function CardProject({
    type = CardProjectsEnum.FIRST,
}: CardProjectsProps) {
    return (
        <>
            {type === 'first' && (
                <S.FirstCardProjectsContainer />
            )}
            {type === 'second' && (
                <S.SecondCardProjectsContainer />
            )}
            {type === 'third' && (
                <S.ThirdCardProjectsContainer />
            )}
            {type === 'fourth' && (
                <S.FourthCardProjectsContainer />
            )}
        </>
    )
}

export default CardProject