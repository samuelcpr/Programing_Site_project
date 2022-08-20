import logoImg from '../../assets/img/img midias/SOUDEV.gif'
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
                    <a href="#habilite-gzip" id='itens'>MINHAS HABILIDADES</a>
                    <a href="" id='itens'>PORTFÓLIO</a>
                </nav>

                <div className="button">
                    <a href="#">Orçamento</a>
                </div>

            </div>
        </Container>
    )
}