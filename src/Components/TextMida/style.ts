import styled from "styled-components";

export const Textmidia = styled.div`
.textMidia {
display: grid;
grid-template-areas:"midiaText midiaIMG" ;
grid-template-columns: 50% 50%;
justify-content: center;


}

.midiaIMG {
    grid-area: midiaIMG;
    
   
    
}
.midiaIMG img {
    height: 35rem;
    margin-left: 3rem;
    filter: grayscale(1);
    transition: .9s;
}
.midiaIMG img:hover{
    filter: none;
}

.midiaText {
    grid-area: midiaText;
    margin: 5rem 0 0 20rem;
    
   
}
.midiaText h2 {
    font-size: 3rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #7E7F7F;

    &:hover {
    color:#3F7C72;   
}
}
.midiaText h3 {
    margin-top: 3rem;
    font-size: 25px;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
    color: #7E7F7F;

}
.midiaText p {
    margin-top: 3rem;
    font-size: 22px;
    color: #7E7F7F;
}
`