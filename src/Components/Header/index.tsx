import logoImg from '../../assets/logo-nova-opis.svg'
import { Container } from './style'

export function Header() {
    return (
        <Container>
            <div className="topBar">
                <div className="logoImg">
                    <a href="#"><img src={logoImg} alt="" id='logo' /></a>
                </div>

                <nav className='textmenu'>
                    <a href="" id='itens'>HOME</a>
                    <a href="" id='itens'>EMPRESA</a>
                    <a href="" id='itens'>PORTFÓLIO</a>
                    <a href="" id='itens'>SERVIÇOS</a>
                    <a href="" id='itens'>CURSOS</a>
                </nav>

                <div className="button">
                    <a href="#">Orçamento</a>
                </div>

            </div>
        </Container>
    )
}