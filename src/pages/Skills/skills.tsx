import { useState } from "react"
import Container from "../../components/Container/container.view"
import * as S from './skills.styles'
import { FaBootstrap, FaCss3, FaFigma, FaGit, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa";
import { SiCsharp, SiStyledcomponents, SiTailwindcss, SiTypescript } from "react-icons/si";

function Skills() {

  const [text, setText] = useState("");

  const Clear = () => {
    setText("");
  }

  const FirstChange = () => {
    setText(`
        HTML (HyperText Markup Language): É a linguagem padrão usada para criar páginas web. HTML define a estrutura do conteúdo na web usando elementos como títulos, parágrafos, links, imagens e formulários.
      `)
  }

  const SecondChange = () => {
    setText(`
        CSS (Cascading Style Sheets): É a linguagem utilizada para definir a aparência e o estilo das páginas web. CSS controla o layout, cores, fontes, espaçamentos, e outras propriedades visuais de elementos HTML.
      `)
  }
  

  const ThirdChange = () => {
    setText(`
        JavaScript (JS): É uma linguagem de programação usada para tornar as páginas web interativas. Com JavaScript, você pode manipular o DOM, validar formulários, criar animações, entre outras funcionalidades dinâmicas.
      `)
  }


  const FourthChange = () => {
    setText(`
        TypeScript (TS): É uma linguagem de programação que estende o JavaScript, adicionando tipagem estática e outros recursos avançados. TS ajuda a identificar erros durante o desenvolvimento, melhorando a manutenção e escalabilidade do código.
      `)
  }

  const FifthChange = () => {
    setText(`
        React: É uma biblioteca JavaScript para construção de interfaces de usuário, especialmente SPA (Single Page Applications). React permite criar componentes reutilizáveis e gerencia o estado da aplicação de forma eficiente.
      `)
  }

  const SixthChange = () => {
    setText(`
        Styled Components: É uma biblioteca para React e React Native que permite escrever estilos em CSS dentro do código JavaScript, usando uma abordagem chamada de CSS-in-JS. Estilos são escopados automaticamente aos componentes.
      `)
  }

  const SeventhChange = () => {
    setText(`
        Tailwind CSS: É um framework CSS utilitário que permite criar designs diretamente no HTML usando classes pré-definidas. Tailwind facilita a construção rápida de interfaces personalizadas e consistentes.
      `)
  }

  const EighthChange = () => {
    setText(`
        Figma: É uma ferramenta de design colaborativo usada para criar protótipos, interfaces de usuário, e fluxos de design. Figma permite que equipes trabalhem simultaneamente em projetos e é muito utilizado no design de aplicativos e sites.
      `)
  }

  const NinethChange = () => {
    setText(`
        Bootstrap: É um framework front-end que fornece componentes e utilitários CSS e JavaScript prontos para uso, facilitando a criação de sites responsivos e consistentes. Bootstrap é popular por sua simplicidade e suporte a layouts adaptáveis.
      `)
  }

  const TenthChange = () => {
    setText(`
        C#: É uma linguagem de programação moderna e orientada a objetos desenvolvida pela Microsoft. C# é usada para desenvolvimento de aplicações desktop, web, mobile, e jogos, especialmente na plataforma .NET.
      `)
  }

  const EleventhChange = () => {
    setText(`
      Node.js: É um ambiente de execução JavaScript do lado do servidor. Node.js permite criar aplicações web escaláveis, usando a linguagem JavaScript tanto no front-end quanto no back-end.
      `)
  }

  const TwelvthChange = () => {
    setText(`
      Git: É um sistema de controle de versão distribuído usado para rastrear mudanças no código-fonte. Git facilita o trabalho colaborativo, permitindo que desenvolvedores gerenciem e revertam alterações no código de forma segura.
      `)
  }

    return (
        <Container>
          <S.Content>
            <S.Wrapper>
              <S.Left>
                <S.Text_left>
                  Tech Skills
                </S.Text_left>
                <S.P_Left>
                  /*Passe o mouse e descubra sua descrição*/
                </S.P_Left>
                <S.Descricao>
                  {text}
                </S.Descricao>
              </S.Left>
              <S.Right>
                <S.Itens onMouseOver={FirstChange} onMouseLeave={Clear}>
                  <FaHtml5/>
                </S.Itens>
                <S.Itens onMouseOver={SecondChange} onMouseLeave={Clear}>
                  <FaCss3/>
                </S.Itens>
                <S.Itens onMouseOver={ThirdChange} onMouseLeave={Clear}> 
                  <FaJs/>
                </S.Itens>
                <S.Itens onMouseOver={FourthChange} onMouseLeave={Clear}>
                  <SiTypescript/>
                </S.Itens>
                <S.Itens onMouseOver={FifthChange} onMouseLeave={Clear}>
                  <FaReact/>
                </S.Itens>
                <S.Itens onMouseOver={SixthChange} onMouseLeave={Clear}>
                  <SiStyledcomponents/>
                </S.Itens>
                <S.Itens onMouseOver={SeventhChange} onMouseLeave={Clear}>
                  <SiTailwindcss/>
                </S.Itens>
                <S.Itens onMouseOver={EighthChange} onMouseLeave={Clear}>
                  <FaFigma/>
                </S.Itens>
                <S.Itens onMouseOver={NinethChange} onMouseLeave={Clear}>
                  <FaBootstrap/>
                </S.Itens>
                <S.Itens onMouseOver={TenthChange} onMouseLeave={Clear}>
                  <SiCsharp/>
                </S.Itens>
                <S.Itens onMouseOver={EleventhChange} onMouseLeave={Clear}>
                  <FaNode/>
                </S.Itens>
                <S.Itens onMouseOver={TwelvthChange} onMouseLeave={Clear}>
                  <FaGit/>
                </S.Itens>
              </S.Right>
            </S.Wrapper>
          </S.Content>
        </Container>
    )
  }
  
export default Skills
  