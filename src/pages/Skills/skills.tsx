import { FaCss3Alt, FaFigma, FaHtml5, FaLaravel, FaReact } from 'react-icons/fa'
import * as S from './skills.styles'
import { IoLogoJavascript } from 'react-icons/io'
import { SiStyledcomponents, SiTypescript } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import Container from '../../components/Container/container.view'
import { useState } from 'react'

function Skills() {

  const [text, setText] = useState("")
  
  const mouseClear = () => {
    setText("")
  }

  const mouseHoverFirst = () => {
    setText(`HTML (HyperText Markup Language)
      Descrição: É a linguagem padrão para criar e estruturar páginas na web.
      Uso: Define a estrutura básica do conteúdo da web utilizando tags como <div>, <p>, <a>, etc.
      Importância: Fundamental para a criação de qualquer página web.
    `)
  }

  const mouseHoverSecond = () => {
    setText(`CSS (Cascading Style Sheets)
      Descrição: Linguagem de estilo utilizada para descrever a apresentação de um documento escrito em HTML ou XML.
      Uso: Estiliza elementos HTML, definindo layout, cores, fontes, espaçamentos, etc.
      Importância: Essencial para criar páginas web visualmente atraentes e responsivas.
    `)
  }

  const mouseHoverThird = () => {
    setText(`JavaScript
      Descrição: Linguagem de programação utilizada para criar conteúdo dinâmico e interativo na web.
      Uso: Manipula elementos HTML e CSS, responde a eventos do usuário, e realiza operações complexas no navegador.
      Importância: Crucial para adicionar interatividade e funcionalidades avançadas em páginas web.
    `)
  }

  const mouseHoverFourth = () => {
    setText(`React
      Descrição: Biblioteca JavaScript para construir interfaces de usuário.
      Uso: Cria componentes reutilizáveis que gerenciam seu próprio estado, facilitando a criação de interfaces de usuário complexas.
      Importância: Amplamente usada para construir aplicações web rápidas e escaláveis.
    `)
  }

  const mouseHoverFifth = () => {
    setText(`TypeScript
      Descrição: Superconjunto do JavaScript que adiciona tipagem estática opcional.
      Uso: Permite detectar erros de tipo durante o desenvolvimento, melhorando a manutenção e escalabilidade do código.
      Importância: Facilita a construção de grandes aplicações JavaScript, proporcionando uma experiência de desenvolvimento mais segura e eficiente.
    `)
  }

  const mouseHoverSixth = () => {
    setText(`TailwindCSS
      Descrição: Framework CSS utilitário que permite a criação rápida de interfaces personalizadas.
      Uso: Fornece classes utilitárias pré-definidas que podem ser combinadas para estilizar componentes diretamente no HTML.
      Importância: Acelera o desenvolvimento e evita a escrita de CSS customizado excessivo.
    `)
  }

  const mouseHoverSeventh = () => {
    setText(`Styled Components
      Descrição: Biblioteca para estilização de componentes em React e React Native.
      Uso: Permite escrever CSS dentro do JavaScript, aplicando estilos diretamente aos componentes.
      Importância: Promove a reutilização e encapsulamento de estilos, facilitando a manutenção do código.
    `)
  }

  const mouseHoverEight = () => {
    setText(`Laravel
      Descrição: Framework PHP para desenvolvimento web com uma sintaxe elegante.
      Uso: Facilita a criação de aplicações web robustas com funcionalidades como roteamento, autenticação, e migrações de banco de dados.
      Importância: Popular entre desenvolvedores PHP devido à sua simplicidade, flexibilidade e vasta comunidade de suporte.
    `)
  }
  
  const mouseHoverNineth = () => {
    setText(`Figma
      Descrição: Ferramenta de design de interface colaborativa baseada na web.
      Uso: Utilizada para criar protótipos de alta fidelidade, wireframes e designs UI/UX, permitindo colaboração em tempo real.
      Importância: Muito utilizada por equipes de design e desenvolvimento para criar e iterar sobre designs de forma eficiente.
    `)
  }

    return (
      <Container>

        <S.Content>
          <S.Wrapper>

            <S.Left>
              <h2>Minhas Skills</h2>
              <p>*Passe o mouse nos ícones dentro dos cards e descubra*</p>
              <p>{text}</p>
            </S.Left>

            <S.Right>

              <S.skills>
                <FaHtml5 onMouseEnter={mouseHoverFirst} onMouseLeave={mouseClear} fontSize={60} />
              </S.skills>

              <S.skills>
                <FaCss3Alt onMouseEnter={mouseHoverSecond} onMouseLeave={mouseClear} fontSize={60} />
              </S.skills>

              <S.skills>
                <IoLogoJavascript onMouseEnter={mouseHoverThird} onMouseLeave={mouseClear} fontSize={60} />
              </S.skills>

              <S.skills>
                <FaReact onMouseEnter={mouseHoverFourth} onMouseLeave={mouseClear} fontSize={60} />
              </S.skills>

              <S.skills>
                <SiTypescript onMouseEnter={mouseHoverFifth} onMouseLeave={mouseClear} fontSize={60} />
              </S.skills>

              <S.skills>
                <RiTailwindCssFill onMouseEnter={mouseHoverSixth} onMouseLeave={mouseClear} fontSize={60} />
              </S.skills>

              <S.skills>
                <SiStyledcomponents onMouseEnter={mouseHoverSeventh} onMouseLeave={mouseClear} fontSize={60} />
              </S.skills>

              <S.skills>
                <FaLaravel onMouseEnter={mouseHoverEight} onMouseLeave={mouseClear} fontSize={60} />
              </S.skills>

              <S.skills>
                <FaFigma onMouseEnter={mouseHoverNineth} onMouseLeave={mouseClear} fontSize={60} />
              </S.skills>

            </S.Right>
          </S.Wrapper>
        </S.Content>
      </Container>
    )
  }
  
  export default Skills
  