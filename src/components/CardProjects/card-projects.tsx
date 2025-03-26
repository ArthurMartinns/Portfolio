import * as S from './card-project.styles'
import { CardProjectsProps } from './card-project.types'

function CardProject({
    title,
    description,
    img,
    linkRepositorio,
    deploy
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
                    <S.Links>
                        <S.TextLink href={linkRepositorio} target={'_blank'}>
                            Acesse o repositório
                        </S.TextLink>
                        <S.TextLink href={deploy} target={'_blank'}>
                            Confira o deploy
                        </S.TextLink>
                    </S.Links>
                </S.Bottom>
            </S.CardProjectsContainer>
        </>
    )
}

export default CardProject