import { SiGmail } from 'react-icons/si';
import Title from '../Title/title';
import * as S from './contact.styles'
import Container from '../Container/container.view';
import { LuGithub } from 'react-icons/lu';
import { FiLinkedin } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa';
import Button from '../Buttons/button';
import { TypeButtonEnum } from '../Buttons/button.type';

function Contact() {
    return (
        <>
            <S.Container>
                <Container>
                    <S.ContentContact>
                        <Title text={'Contato'} Icon={SiGmail} />
                        <S.WrapperItens>
                            <S.ItensLeft>
                                <S.Description>
                                    Interessou? Entre em contato através das redes socias abaixo ou preencha o formulário ao lado.
                                </S.Description>
                                <S.Socials>
                                    <S.SocialItens>
                                        <LuGithub fontSize={25} />
                                        <p>
                                            <a href="https://github.com/ArthurMartinns" target='_blank'>
                                                GitHub
                                            </a>
                                        </p>
                                    </S.SocialItens>
                                    <S.SocialItens>
                                        <FiLinkedin fontSize={25} />
                                        <p>
                                            <a href="https://www.linkedin.com/in/arthurmarrtins/" target='_blank'>
                                                Linkedin
                                            </a>
                                        </p>
                                    </S.SocialItens>
                                    <S.SocialItens>
                                        <FaRegEnvelope fontSize={25} />
                                        <p>
                                            arthurmartiinscontato@gmail.com
                                        </p>
                                    </S.SocialItens>
                                </S.Socials>
                            </S.ItensLeft>
                            <S.ItensRight>
                                <form action="">
                                    <label htmlFor="">
                                        Nome:
                                    </label>
                                    <input type="text" placeholder='Digite seu nome: ' />
                                    <label htmlFor="">
                                        Email:
                                    </label>
                                    <input type="text" placeholder='Digite seu email: '/>
                                    <label htmlFor="">
                                        Mensagem:
                                    </label>
                                    <textarea name="" id=""/>
                                    <Button type={TypeButtonEnum.PRIMARY} buttonText={'Enviar mensagem'} />
                                </form>
                            </S.ItensRight>
                        </S.WrapperItens>
                    </S.ContentContact>
                </Container>
                <p>
                    © 2025 Arthur Martins. Todos os direitos reservados.
                </p>
            </S.Container>
        </>
    )
}

export default Contact;