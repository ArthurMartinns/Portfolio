import { GiHamburgerMenu } from 'react-icons/gi'
import * as S from './header.styles'
import { useState } from 'react'
import Container from '../Container/container.view'
import { Link } from 'react-router-dom'

function HeaderView() {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    
    // const handleHomeScreen = () => {
    //     setIsOpen(false)
    // }

    // const handleAboutScreen = () => {
    //     setIsOpen(false)
    // }

    return(
        <>
            <Container>
                <S.Header>
                    <S.Title>
                        &lt;AM/	&gt;
                    </S.Title>
                    <GiHamburgerMenu 
                        onClick={toggleMenu}   
                        fontSize={25}
                    />
                    {isOpen && (
                        <S.SideMenu>
                            <Link to={'/'} onClick={toggleMenu}>Home</Link>
                            <Link to={'/About'} onClick={toggleMenu}>About</Link>
                            <Link to={'/Skills'} onClick={toggleMenu}>Skills</Link>
                            <Link to={'/Projects'} onClick={toggleMenu}>Projects</Link>
                            <Link to={'/Contact'} onClick={toggleMenu}>Contact</Link>
                            {/* <h1 onClick={toggleMenu}>Voltar</h1> */}
                        </S.SideMenu>
                    )}
                </S.Header>
            </Container>
        </>
    )
}

export default HeaderView

