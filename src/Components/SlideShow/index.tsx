import Video from '../../assets/img/solicitar-atendimento.gif'
import ImgSocial from '../../assets/img/whatsapp.svg'
import { Slid } from './style'

export function SlideShow() {
    return (
        <Slid>
            <div className="slider">



                <img src={Video} alt="" />

                <div className="contatoSocial">
                    <img id="swing" src={ImgSocial} alt="" />

                </div>
            </div>
        </Slid >
    )
}