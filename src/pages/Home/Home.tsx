import About from '../../components/About/about'
import Contact from '../../components/Contact/contact'
import Hero from '../../components/Hero/hero.view'
import Projects from '../../components/Projects/projects'
import Skills from '../../components/Skills/skills'
import * as S from './home.styles'

function Home() {
  return (
    <>
      <S.Body>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </S.Body>
    </>
  )
}

export default Home
