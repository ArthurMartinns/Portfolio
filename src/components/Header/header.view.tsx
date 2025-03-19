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

    return(
        <>
            <Container>
                <S.Header>
                    <S.Title>
                        &lt;ArthurMartins/&gt;
                    </S.Title>
                    <S.Right>
                        <S.List>
                            <S.ListItems>
                                <a href="">
                                    Home
                                </a>
                            </S.ListItems>
                            <S.ListItems>
                                <a href="">
                                    About
                                </a>
                            </S.ListItems>
                            <S.ListItems>
                                <a href="">
                                    Skills
                                </a>
                            </S.ListItems>
                            <S.ListItems>
                                <a href="">
                                    Projects
                                </a>
                            </S.ListItems>
                            <S.ListItems>
                                <a href="">
                                    Contact
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
                                        Home
                                    </a>
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
                                        <MdClose onClick={toggleMenu} size={40}/>
                                    </S.Close>
                                </S.SideMenu>
                            )}
                        </S.Responsivo>
                    </S.Right>
                </S.Header>
            </Container>
        </>
    )
}

export default HeaderView

