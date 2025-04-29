import * as S from './header.styles'
import Container from '../Container/container.view'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'

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
                                    <a href="">
                                        Sobre
                                    </a>
                                </S.ListItems>
                                <S.ListItems>
                                    <a href="">
                                        Skills
                                    </a>
                                </S.ListItems>
                                <S.ListItems>
                                    <a href="">
                                        Projetos
                                    </a>
                                </S.ListItems>
                                <S.ListItems>
                                    <a href="">
                                        Contato
                                    </a>
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
                                            onClick={toggleMenu}
                                        >
                                            About
                                        </a>
                                        <a
                                            onClick={toggleMenu}
                                        >
                                            Skills
                                        </a>
                                        <a
                                            onClick={toggleMenu}
                                        >
                                            Projects
                                        </a>
                                        <a
                                            onClick={toggleMenu}
                                        >
                                            Contact
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

