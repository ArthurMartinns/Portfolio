import * as S from './header.styles'
import Container from '../Container/container.view'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { ButtonThemeMode } from '../ButtonThemeMode/button-theme-mode.view'

function HeaderView() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <S.Header>
                <Container>
                    <S.Nav>
                        <S.Title>
                            &lt;AM/&gt;
                        </S.Title>
                        <S.Right>
                            <S.List>
                                <S.ListItems>
                                    <a href="#sobre">
                                        Sobre
                                    </a>
                                </S.ListItems>
                                <S.ListItems>
                                    <a href="#skills">
                                        Skills
                                    </a>
                                </S.ListItems>
                                <S.ListItems>
                                    <a href="#projetos">
                                        Projetos
                                    </a>
                                </S.ListItems>
                                <S.ListItems>
                                    <a href="#contato">
                                        Contato
                                    </a>
                                </S.ListItems>
                                <S.ListItems>
                                    <ButtonThemeMode />
                                </S.ListItems>
                            </S.List>
                            <S.Responsivo>
                                <GiHamburgerMenu
                                    onClick={toggleMenu}
                                    fontSize={20}
                                    color='#000'
                                />
                                {isOpen && (
                                    <S.SideMenu>
                                        <a
                                            href="#sobre"
                                            onClick={toggleMenu}
                                        >
                                            Sobre
                                        </a>
                                        <a
                                            href="#skills"
                                            onClick={toggleMenu}
                                        >
                                            Skills
                                        </a>
                                        <a
                                            href="#projetos"
                                            onClick={toggleMenu}
                                        >
                                            Projetos
                                        </a>
                                        <a
                                            href="#contato"
                                            onClick={toggleMenu}
                                        >
                                            Contato
                                        </a>
                                        <a>
                                            <ButtonThemeMode />
                                        </a>

                                        <S.Close>
                                            <MdClose onClick={toggleMenu} size={40} />
                                        </S.Close>
                                    </S.SideMenu>
                                )}
                            </S.Responsivo>
                        </S.Right>
                    </S.Nav>
                </Container>
            </S.Header>
        </>
    )
}

export default HeaderView

