import img from '../../assets/img/imagemnossahistoria-u1434-fr.jpg'
import styled from 'styled-components'

const Imgstyle = styled.div`
    height: 39rem;
    width: auto;
    display: flex;
    position: relative;
    margin-left: 70rem;
    margin-top: -22rem;
   
   
    img {
        filter: grayscale(1);
    transition: .9s;
}

 img:hover {
        
        filter: none;
   }

    
`

export function ImgFooter() {
    return (
        <Imgstyle>
            <div>
                <img src={img} alt="" />
            </div>
        </Imgstyle>
    )
}