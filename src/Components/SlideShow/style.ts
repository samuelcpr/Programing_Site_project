import styled from "styled-components";

export const Slid = styled.div`
.slider {
    height: 40rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: static;
    
   
    background-color: #000101;
}
#habilite-gzip {
    margin-top: 36rem;
}

.slider img {
    height: 25rem;
    width: auto;
    padding: 0;
    margin: 5rem 0 0 38%;
    
}

.contatoSocial {
    width: auto;
    display: flex;
    justify-content: right;
    margin-top: 0;
    
}
/* Iciciando interação social*/
#swing {
    z-index: 1;
    height: 5rem;
    position: fixed;
    margin: 32% 0 0 20%;
}
@-webkit-keyframes swing
{
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
       transform: translateX(-5px);
    } 
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
@keyframes swing
{
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
        transform: translateX(-5px);
    }
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}

#swing:hover
{
    
        -webkit-animation: swing 1s ease;
        animation: swing 1s ease;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
}
`