import { GiHamburgerMenu } from 'react-icons/gi'
import * as S from './header.styles'
import { useState } from 'react'
import Container from '../Container/container.view'

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
                            
                        </S.SideMenu>
                    )}
                </S.Header>
            </Container>
        </>
    )
}

export default HeaderView

