import { SiGithub } from 'react-icons/si'
import * as S from './card-project.styles'
import { CardProjectsProps } from './card-project.types'
import { FaExternalLinkAlt } from 'react-icons/fa'

function CardProject({
    title,
    description,
    img,
    linkRepositorio,
    deploy,
    tags = []
}: CardProjectsProps) {
    return (
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
                {!!tags.length && (
                    <S.Tags>
                        {tags.map((tag) => (
                            <S.Tag key={tag}>{tag}</S.Tag>
                        ))}
                    </S.Tags>
                )}
                <S.Links>
                    <S.TextLink href={linkRepositorio} target={'_blank'} rel="noreferrer">
                        <SiGithub />
                        Acesse o repositório
                    </S.TextLink>
                    <S.TextLink href={deploy} target={'_blank'} rel="noreferrer">
                        <FaExternalLinkAlt />
                        Confira o deploy
                    </S.TextLink>
                </S.Links>
            </S.Bottom>
        </S.CardProjectsContainer>
    )
}

export default CardProject