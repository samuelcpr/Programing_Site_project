import ImgAnuncio from '../../assets/img/icon parceiros/samuelcarlos.png'
import ParceirosIcon from '../../assets/img/icon parceiros/logo-nova-opis.svg'
import { Bannerinformativo } from './style'


export function TemplatInformativo() {
    return (
        <Bannerinformativo>
            <div className='group'>
                <div className="imgopção">

                    <img src={ImgAnuncio} alt="" />
                </div>
                <div className="text">
                    <h1> Descrições <br /> De Habilidades <br /> E competencias</h1>
                    <p>Conheça o Meu Perfil do Github</p>

                    <div className="parceiros" id='#WE'>
                        <img src={ParceirosIcon} alt="" />

                        <div className="button04">
                            <a href="#">Saber Mais</a>
                        </div>
                    </div>
                </div>
            </div>

        </Bannerinformativo>
    )
}