import Hero from '../../components/Hero/hero.view'
import Projects from '../../components/Projects/projects'
import Skills from '../../components/Skills/skills'
import * as S from './home.styles'

function Home() {
  return (
    <>
      <S.Body>
        <Hero />
        <Skills />
        <Projects />
      </S.Body>
    </>
  )
}

export default Home
