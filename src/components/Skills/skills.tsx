import { useState } from 'react';
import Container from '../Container/container.view';
import Title from '../Title/title';
import * as S from './skills.styles';
import { FaRegFileCode } from 'react-icons/fa';
import { SkillsArray } from './skills.utils';

const descriptions: Record<string, string> = {
    Html: 'HTML (HyperText Markup Language) é a linguagem padrão para a criação de páginas web. Ele permite estruturar o conteúdo de um site utilizando elementos como títulos, parágrafos, imagens, links e tabelas. Trabalha em conjunto com CSS e JavaScript para criar páginas interativas e responsivas.',
    
    Css: 'CSS (Cascading Style Sheets) é uma linguagem de estilo usada para definir a aparência e o layout de páginas web. Com CSS, é possível aplicar cores, fontes, espaçamentos e animações, além de criar layouts flexíveis e responsivos para diferentes tamanhos de tela.',
    
    JavaScript: 'JavaScript é uma linguagem de programação de alto nível usada para tornar páginas web interativas. Com JS, é possível manipular o DOM, responder a eventos do usuário, realizar requisições assíncronas e criar aplicações complexas como SPAs (Single Page Applications) e PWA (Progressive Web Apps).',
    
    React: 'React é uma biblioteca JavaScript de código aberto para a construção de interfaces de usuário. Ele utiliza um conceito chamado Virtual DOM para otimizar atualizações na tela, permitindo criar aplicações dinâmicas e escaláveis de maneira eficiente. React é amplamente usado no desenvolvimento de SPAs e aplicações móveis com React Native.',
    
    TailwindCss: 'Tailwind CSS é um framework CSS baseado em classes utilitárias que permite criar designs personalizados sem precisar escrever CSS do zero. Ele facilita a estilização ao fornecer classes pré-definidas para cores, espaçamentos, tipografia, grid e flexbox, acelerando o desenvolvimento.',
    
    StyledComponents: 'Styled Components é uma biblioteca para estilização de componentes em aplicações React. Utilizando a abordagem CSS-in-JS, permite escrever estilos diretamente dentro dos componentes, garantindo encapsulamento e evitando conflitos de classe.',
    
    BootStrap: 'Bootstrap é um framework CSS popular que fornece componentes prontos para a construção de interfaces responsivas e modernas. Ele inclui um sistema de grid flexível, botões, modais, carrosséis e outras funcionalidades que agilizam o desenvolvimento web.',
    
    Nodejs: 'Node.js é um ambiente de execução JavaScript no lado do servidor. Ele permite construir aplicações escaláveis, como APIs REST e servidores web em tempo real, utilizando um modelo assíncrono baseado em eventos. O Node.js é amplamente utilizado para back-end com frameworks como Express.js.',
    
    TypeScript: 'TypeScript é um superset do JavaScript que adiciona tipagem estática e recursos avançados para desenvolvimento seguro e escalável. Ele melhora a manutenção do código, reduz erros comuns e é amplamente adotado em projetos de grande porte, especialmente com frameworks como React e Angular.',
    
    'C#': 'C# é uma linguagem de programação orientada a objetos desenvolvida pela Microsoft. Muito utilizada no desenvolvimento de aplicações Windows, jogos com Unity, APIs e sistemas empresariais, C# possui forte integração com a plataforma .NET e oferece alto desempenho e segurança.',

};


function Skills() {
    const [description, setDescription] = useState('');

    return (
        <S.Container>
            <Container>
                <S.SectionSkills>
                    <Title text={'Minhas Skills'} Icon={FaRegFileCode} />
                    <S.BottomSkills>
                        <S.LeftSkillsDescriptions>
                            <p>
                                Passe o mouse por cima do ícone e descubra um pouco sobre a tecnologia...
                            </p>
                            <p>
                                {description}
                            </p>
                        </S.LeftSkillsDescriptions>
                        <S.RightSkillsItens>
                            {SkillsArray.map((item) => (
                                <S.BoxSkilss 
                                    key={item.nome}
                                    onMouseEnter={() => setDescription(descriptions[item.nome] ?? '')}
                                    onMouseLeave={() => setDescription('')} 
                                >
                                    {item.icon}
                                </S.BoxSkilss>
                            ))}
                        </S.RightSkillsItens>
                    </S.BottomSkills>
                </S.SectionSkills>
            </Container>
        </S.Container>
    );
}

export default Skills;
