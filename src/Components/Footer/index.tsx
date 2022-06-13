import { FooterContainer } from "./style";
import img1 from '../../assets/clientes-min.svg'
import img2 from '../../assets/4-logs.svg'
import img3 from '../../assets/3-logus02.svg'
import metaGoogle from '../../assets/meta-ok-rem-preview.png'

export function Footer() {
    return (
        <FooterContainer>
            <div className="main">
                <div className="footer1">
                    <h1>ALGUNS DE NOSSOS CLIENTES:</h1>
                    <img src={img1} />
                </div>
                <div className="imgFooter">
                    <img src={img2} id="M1" />
                    <img src={img3} id="M2" />
                </div>

                <div className="content">

                    <div className="colun1">
                        <h1>CONTATO</h1>
                        <p>(62) 3773-8476 / (62) 98549-0202 <br />
                            diretoria@opispublicidade.com.br</p>
                    </div>
                    <div className="colun2">
                        <h1>CONTATO</h1>
                        <p>(62) 3773-8476 / (62) 98549-0202 <br />
                            diretoria@opispublicidade.com.br</p>
                    </div>
                    <div className="colun3">
                        <img src={metaGoogle} alt="" />
                    </div>
                    <div>

                    </div>
                </div>

                <div className="textFooter">
                    <h1>©  2022 / 2022 - Samuel Carlos. Todos direitos reservados.</h1>
                </div>
            </div>
        </FooterContainer>
    )
}