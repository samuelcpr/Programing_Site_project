import { Midiasocial } from "./style";
import linha1_1 from '../../assets/img/img midias/criacao-de-logo-2.svg'
import linha1_2 from '../../assets/img/img midias/marketing-digital.svg'
import linha1_3 from '../../assets/img/img midias/site-e-ecommerce.svg'
import linha2_1 from '../../assets/img/img midias/planejamento.svg'
import linha2_2 from '../../assets/img/img midias/criacao-de-video.svg'
import linha2_3 from '../../assets/img/img midias/campanhas.svg'

export function MidiaSocial() {
    return (
        <Midiasocial>
            <div className="midiasSociais">
                <div className="linhaElement01">

                    <div className="container">
                        <div className="styleImg1">
                            <img src={linha1_1} alt="" id="intem1" />
                            <h2 id="item2">Criação de Logo e <br />
                                Identidade Visual</h2><br />
                            <p id="linha"></p><br />
                        </div>
                        <p id="texte">Desenvolvimento de Marcas / Logo / Logotipos e <br />
                            Identidade visual, como desenvolvimento preparado <br />
                            para patente. <br /> </p>
                        <div className="ContainerButton">
                            <button>Saiba Mais</button>
                        </div>
                    </div>

                    <div className="container">
                        <div className="styleImg2">
                            <img src={linha1_2} alt="" id="elementoImg" />
                            <h2 id="elementoTitle">Marketing Digital <br />
                                e Google Adwords</h2><br />
                            <p id="elementoLinha"></p><br />
                        </div>
                        <p id="textMidia2">Gerenciamento de Redes Sociais / Marketing Digital <br />
                            / Google Ads. Planejamento prévio com foco em <br />
                            resultados e vendas.</p>
                    </div>
                    <div className="container">
                        <div className="styleImg3">
                            <img src={linha1_3} alt="" id="cartImg" />
                            <h2 id="cartTitle">Sites e E-commerce <br />
                                / Loja Virtual / Seo</h2><br />
                            <p id="cartLinha"></p><br />
                        </div>
                        <p id="cartText">Criação de Sites e E-commerce organizados <br />
                            para SEO. O próprio usuário consegue alimentar e dar <br />
                            sequência no trabalho.</p>
                    </div>
                </div>

                {/** Segunda linha */}

                <div className="linhaElement02">
                    <div className="container">
                        <div className="styleImg4">
                            <img src={linha2_1} alt="" id="messageImg" />
                            <h2 id="mensageTitle">Planejamento <br />
                                Publicitário e Venda</h2> <br />
                            <p id="mensageLinha"></p>
                        </div>
                        <p id="mesageText"> Desenvolvimento de Marcas / Logo / Logotipos e <br />
                            Identidade visual, como desenvolvimento preparado <br /> para patente.</p>
                    </div>
                    <div className="container">
                        <div className="styleImg5">
                            <img src={linha2_2} alt="" id="videoImg" />
                            <h2 id="videoTitle">Criação de Vídeo <br />
                                e Animação</h2> <br />
                            <p id="videoLinha"></p>

                        </div>
                        <p id="videoText">Gerenciamento de Redes Sociais / Marketing Digital <br />
                            / Google Ads. Planejamento prévio com foco em <br /> resultados e vendas.</p>
                    </div>
                    <div className="container">
                        <div className="styleImg6">
                            <img src={linha2_3} alt="" id="alvoImg" />
                            <h2 id="alvoTitle">Criação de <br />
                                Campanhas</h2> <br />
                            <p id="alvoLinha"></p>
                        </div>
                        <p id="alvoText">Criação de Sites e E-commerce organizados para <br />
                            SEO. O próprio usuário consegue alimentar e dar <br /> sequência no trabalho.</p>
                    </div>

                </div>


            </div>
        </Midiasocial>

    )

}