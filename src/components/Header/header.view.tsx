import { useState } from 'react'
import Container from '../../components/Container/container.view'
import * as S from './header.styles'
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

function Header() {

    const [open, isOpen] = useState(false)

    const toggleMenu = () => {
        isOpen(!open)
    }

    console.log(toggleMenu)

    return (
        <>
            <S.Header>
                <Container>
                    <S.Content>
                        <S.Left>
                            &lt;Am/&gt;
                        </S.Left>
                        <S.Right>
                            <S.Links>
                                About
                            </S.Links>
                            <S.Links>
                                Skills
                            </S.Links>
                            <S.Links>
                                Projects
                            </S.Links>
                            <S.Links>
                                Contact
                            </S.Links>
                        </S.Right>
                        <S.Responsivo>
                            <IoIosMenu
                                onClick={toggleMenu}
                                color='#fff'
                                fontSize={20}
                            />
                        </S.Responsivo>
                        {open && (
                            <S.Menu>
                                <S.SubItens>
                                    <S.LinksResponsivo>
                                        About
                                    </S.LinksResponsivo>
                                    <S.LinksResponsivo>
                                        Skills
                                    </S.LinksResponsivo>
                                    <S.LinksResponsivo>
                                        Projects
                                    </S.LinksResponsivo>
                                    <S.LinksResponsivo>
                                        Contact
                                    </S.LinksResponsivo>
                                    <IoCloseSharp
                                        onClick={toggleMenu}
                                        fontSize={20}
                                        color='#fff'
                                    />
                                </S.SubItens>
                            </S.Menu>
                        )}
                    </S.Content>
                </Container>
            </S.Header>
        </>
    )
}

export default Header

