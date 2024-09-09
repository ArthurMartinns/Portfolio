import * as S from './header.styles'
import { Link } from 'react-router-dom'
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
                        &lt;AM/	&gt;
                    </S.Title>
                    <S.Right>
                        <S.List>
                            <S.ListItems>
                                <Link to={'/'}>
                                    Home
                                </Link>
                            </S.ListItems>
                            <S.ListItems>
                                <Link to={'/About'}>
                                    About
                                </Link>
                            </S.ListItems>
                            <S.ListItems>
                                <Link to={'/Skills'}>
                                    Skills
                                </Link>
                            </S.ListItems>
                            <S.ListItems>
                                <Link to={'/Projects'}>
                                    Projects
                                </Link>
                            </S.ListItems>
                            <S.ListItems>
                                <Link to={'/Contact'}>
                                    Contact
                                </Link>
                            </S.ListItems>
                        </S.List>
                        <S.Responsivo>
                            <GiHamburgerMenu 
                                onClick={toggleMenu}   
                                fontSize={20}
                                color='#ffffff'
                            />
                            {isOpen && (
                                <S.SideMenu>
                                    <Link 
                                        to={'/'} 
                                        onClick={toggleMenu}
                                    >
                                        Home
                                    </Link>
                                    <Link 
                                        to={'/About'} 
                                        onClick={toggleMenu}
                                    >
                                        About
                                    </Link>
                                    <Link 
                                        to={'/Skills'} 
                                        onClick={toggleMenu}
                                    >
                                        Skills
                                    </Link>
                                    <Link 
                                        to={'/Projects'} 
                                        onClick={toggleMenu}
                                    >
                                        Projects
                                    </Link>
                                    <Link 
                                        to={'/Contact'} 
                                        onClick={toggleMenu}
                                    >
                                        Contact
                                    </Link>
                                    
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

