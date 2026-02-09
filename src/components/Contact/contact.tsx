import { SiGmail } from 'react-icons/si';
import Title from '../Title/title';
import * as S from './contact.styles'
import Container from '../Container/container.view';
import { LuGithub } from 'react-icons/lu';
import { FiLinkedin } from 'react-icons/fi';
import { FaRegEnvelope, FaWhatsapp } from 'react-icons/fa';
import Button from '../Buttons/button';
import { TypeButtonEnum } from '../Buttons/button.type';

function Contact() {
    return (
        <>
            <S.Container id="contato">
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
                                            <a
                                                href="https://github.com/ArthurMartinns"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                GitHub
                                            </a>
                                        </p>
                                    </S.SocialItens>
                                    <S.SocialItens>
                                        <FiLinkedin fontSize={25} />
                                        <p>
                                            <a
                                                href="https://www.linkedin.com/in/arthurmarrtins/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Linkedin
                                            </a>
                                        </p>
                                    </S.SocialItens>
                                    <S.SocialItens>
                                        <FaWhatsapp fontSize={25} />
                                        <p>
                                            <a
                                                href="https://wa.me/5531997002244"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                WhatsApp
                                            </a>
                                        </p>
                                    </S.SocialItens>
                                    <S.SocialItens>
                                        <FaRegEnvelope fontSize={25} />
                                        <p>
                                            arthurmartinsdev@gmail.com
                                        </p>
                                    </S.SocialItens>
                                </S.Socials>
                            </S.ItensLeft>
                            <S.ItensRight>
                                <form>
                                    <label htmlFor="nome">
                                        Nome:
                                    </label>
                                    <input
                                        id="nome"
                                        name="nome"
                                        type="text"
                                        placeholder="Digite seu nome"
                                    />
                                    <label htmlFor="email">
                                        Email:
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Digite seu e-mail"
                                    />
                                    <label htmlFor="mensagem">
                                        Mensagem:
                                    </label>
                                    <textarea
                                        id="mensagem"
                                        name="mensagem"
                                        placeholder="Digite sua mensagem"
                                        style={{ resize: 'none' }}
                                    />
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