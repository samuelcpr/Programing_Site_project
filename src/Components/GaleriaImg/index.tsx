import img1_1 from '../../assets/img/icon parceiros/linha 1/positivo-pagamentos-logo-e-site-1.jpg'
import img1_2 from '../../assets/img/icon parceiros/linha 1/bixt-criacao-de-logo-min.jpg'
import img1_3 from '../../assets/img/icon parceiros/linha 1/expressao-da-beleza-website.png'
import img1_4 from '../../assets/img/icon parceiros/linha 1/fanap-campanha.png'
import img1_5 from '../../assets/img/icon parceiros/linha 1/gif/giphy.gif'

import img2_1 from '../../assets/img/icon parceiros/linha2/Ancore-identidade-visual-opis-agencia.png'
import img2_2 from '../../assets/img/icon parceiros/linha2/hurricane-evolution-ecommerce-e-rede-socias-min.jpg'
import img2_3 from '../../assets/img/icon parceiros/linha2/compleite-criacao-de-websites.gif'
import img2_4 from '../../assets/img/icon parceiros/linha2/Rede-social-protege-car-opis-publicidade.png'
import img2_5 from '../../assets/img/icon parceiros/linha2/Identidade-visual-arqplus-agencia-opis.png'

import img3_1 from '../../assets/img/icon parceiros/linha 3/cleo-rocha-criacao-de-site.gif'
import img3_2 from '../../assets/img/icon parceiros/linha 3/frutos-de-goias-site-institucional-min.jpg'
import img3_3 from '../../assets/img/icon parceiros/linha 3/imperio-beff-identidade-visual.png'
import img3_4 from '../../assets/img/icon parceiros/linha 3/vitoria-construtora-logo-min.jpg'
import img3_5 from '../../assets/img/icon parceiros/linha 3/positivo-pagamentos-logo-e-site-min.jpg'

import img4_1 from '../../assets/img/icon parceiros/linha 4/isooficial-redes-sociais.png'
import img4_2 from '../../assets/img/icon parceiros/linha 4/Leila-diniz-video.png'
import img4_3 from '../../assets/img/icon parceiros/linha 4/campanha-loucas-por-baton.gif'
import img4_4 from '../../assets/img/icon parceiros/linha 4/Site-comercial-jd.png'
import img4_5 from '../../assets/img/icon parceiros/linha 4/rede-social-triaddict-opis-agencia-de-publididade.png'
import { Galeria } from './style'

export function GaleriaImg() {
    return (
        <Galeria>
            <div className="GaleriaImagens">
                <div className="linha1">
                    <img src={img1_1} alt="" />
                    <img src={img1_2} alt="" />
                    <img src={img1_3} alt="" />
                    <img src={img1_4} alt="" />
                    <img src={img1_5} alt="" />
                </div>
                <div className="linha2">
                    <img src={img2_1} alt="" />
                    <img src={img2_2} alt="" />
                    <img src={img2_3} alt="" />
                    <img src={img2_4} alt="" />
                    <img src={img2_5} alt="" />
                </div>

                <div className="linha3">
                    <img src={img3_1} alt="" />
                    <img src={img3_2} alt="" />
                    <img src={img3_3} alt="" />
                    <img src={img3_4} alt="" />
                    <img src={img3_5} alt="" />
                </div>

                <div className="linha4">
                    <img src={img4_1} alt="" />
                    <img src={img4_2} alt="" />
                    <img src={img4_3} alt="" />
                    <img src={img4_4} alt="" />
                    <img src={img4_5} alt="" />
                </div>
            </div>
        </Galeria>
    )
}