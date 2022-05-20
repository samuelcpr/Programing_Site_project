import logoImg from '../../assets/logo-nova-opis.svg'
import { Container } from './style'

export function Header() {
    return (
        <Container>
            <div className="topBar">
                <div className="logoImg">
                    <img src={logoImg} alt="" />
                </div>
                <div className="divisor">
                    <nav>
                        <a href="">HOME</a>
                        <a href="">EMPRESA</a>
                        <a href="">PORTFÓLIO</a>
                        <a href="">SERVIÇOS</a>
                        <a href="">CURSOS</a>
                    </nav>
                    <div className="button">
                        <a href="#">Orçamento</a>
                    </div>
                </div>
            </div>
        </Container>
    )
}