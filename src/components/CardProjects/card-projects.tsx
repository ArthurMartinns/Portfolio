import * as S from './card-project.styles'
import { CardProjectsProps } from './card-project.types'

function CardProject({
    title,
    description,
    img
}: CardProjectsProps) {
    return (
        <>
            <S.CardProjectsContainer>
                <S.Image>
                    <img src={img} alt={title} />
                </S.Image>
                <S.Bottom>
                    <S.Title>
                        {title}
                    </S.Title>
                    <S.Description>
                        {description}   
                    </S.Description>
                </S.Bottom>
            </S.CardProjectsContainer>
        </>
    )
}

export default CardProject