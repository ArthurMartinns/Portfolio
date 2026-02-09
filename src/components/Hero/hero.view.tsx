import Button from '../Buttons/button'
import { TypeButtonEnum } from '../Buttons/button.type'
import Container from '../Container/container.view'
import HeaderView from '../Header/header.view'
import * as S from './hero.styles'

function Hero() {
    const handleScrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>

            <HeaderView />
            <S.Container>
                <Container>
                    <S.Main>
                        <S.SectionHero>
                            <S.SectionHeroLeft>
                                <S.Title>
                                    Olá! Sou Arthur Martins, <br />
                                    <strong>
                                        Engenheiro de Software.
                                    </strong>
                                </S.Title>
                                <S.Subtitle>
                                    Transformando ideias em soluções digitais com código limpo e design moderno.
                                </S.Subtitle>
                                <S.WrapperButtons>
                                    <Button
                                        type={TypeButtonEnum.PRIMARY}
                                        buttonText={'Entre em contato'}
                                        onClick={() => handleScrollToSection('contato')}
                                    />
                                    <Button
                                        type={TypeButtonEnum.SECONDARY}
                                        buttonText={'Ver projetos'}
                                        onClick={() => handleScrollToSection('projetos')}
                                    />
                                </S.WrapperButtons>
                            </S.SectionHeroLeft>
                            <S.SectionRight>
                                <img src="/me.jpeg" alt="Foto de Arthur Martins" />
                            </S.SectionRight>
                        </S.SectionHero>
                    </S.Main>
                </Container>
            </S.Container>
        </>
    )
}


export default Hero