import BanerMidia from '../../assets/img/MinhaHinstória.gif'
import { Textmidia } from './style'
export function TextMidia() {
    return (
        <Textmidia>
            <div className="textMidia">
                <div className="midiaText">
                    <h2>Meu <br />
                        Portifólio
                    </h2>
                    <h3>Planejamentos / Estratégia de Curto <br />
                        Médio e Longo Prazo.</h3>
                    <p>Somos especialistas em atendimento a pequenas e médias <br />
                        empresas com foco exclusivo em RESULTADOS, sem <br />
                        contrato de fidelidade ou multa rescisória. Nosso maior <br />
                        objetivo é fazer seu negócio VENDER! Há mais de 8 ANOS <br />
                        no mercado.</p>
                </div>
                <div className="midiaIMG">
                    <img src={BanerMidia} alt="" />
                </div>
            </div>
        </Textmidia>
    )
}