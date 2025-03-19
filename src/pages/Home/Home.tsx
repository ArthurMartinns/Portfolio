import Hero from '../../components/Hero/hero.view'
import Skills from '../../components/Skills/skills'
import * as S from './home.styles'

function Home() {
  return (
    <>
      <S.Body>
        <Hero/>
        <Skills/>
      </S.Body>
    </>
  )
}

export default Home
