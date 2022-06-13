import styled from "styled-components";

export const Midiasocial = styled.div`
.linhaElement01 {
    display: flex;
    height: 20rem;
    justify-content: center;
    align-items: center;
    margin: 15rem 0;
    
  
    
   
    
}

.linhaElement01 img {
    height: 8rem;
    margin-bottom: 20rem;
    }
   
    .linhaElement01 .container {
      padding: 0 2rem;
    }
   
//linha 2

.linhaElement02 {
  display: flex;
    height: 20rem;
    justify-content: center;
    align-items: center;
    margin: 15rem 0;
}

.linhaElement02 .container {
      padding: 0 2rem;
    }


.linhaElement02 img {
  height: 9rem;
      
}

// Primeira coluna de Mídias 
.styleImg1 {
   
  display: grid;
 
  grid-template-areas: "item1 item2" "linha linha" "texte texte" ;
  grid-template-rows: 5rem 3rem ;
  grid-template-columns: 9rem 15em;
}
   
#item1 {
grid-area: item1;

}
#item2 {
  grid-area: item2;
margin-top: 2rem;
font-size: 25px;
font-weight: 500;

}
#linha{
    grid-area: linha;
    display: flex;
    border-width: 2px;
    border-style: dotted;
    border-top: 0 solid transparent;
  margin-top: 5rem;

}
#texte{
    grid-area: texte;
    display: flex;
    border-width: 4px;
    font-size: 15px;
    border-top: 0 solid transparent;
    margin-top: 5rem;
    margin-bottom: 2rem;
    align-items: center;
    
}

// Segunda coluna de Mídias
.styleImg2 {
   
   display: grid;
  
 
   grid-template-areas: "elementoImg elementoTitle" "elementoLinha elementoLinha" "textMidia2 textMidia2";
   grid-template-rows: 5rem 3rem ;
  grid-template-columns: 9rem 15em;
 }
    
 #elementoImg {
 grid-area: elementoImg;
 
 }
 #elementoTitle {
  grid-area: elementoTitle;
  margin-top: 2rem;
  font-size: 25px;
  font-weight: 500;
 }
 #elementoLinha{
     grid-area: elementoLinha;
     display: flex;
    border-width: 2px;
    border-style: dotted;
    border-top: 0 solid transparent;
  margin-top: 5rem;
 
 }
 #textMidia2 {
     grid-area: textMidia2;
     display: flex;
    border-width: 4px;
    font-size: 15px;
    border-top: 0 solid transparent;
    margin-top: 5rem;
    margin-bottom: 2rem;
    align-items: center;

 }

//Terceira Coluna de mídia

.styleImg3 {
   
   display: grid;
  
   grid-template-areas: "cartImg cartTitle" "cartLinha cartLinha" "cartText cartText";
   grid-template-rows: 5rem 3rem ;
  grid-template-columns: 9rem 15em;
 }
    
 #cartImg {
 grid-area: cartImg;
 
 }
 #cartTitle {
   grid-area: cartTitle;
   margin-top: 2rem;
  font-size: 25px;
  font-weight: 500;
 }
 #cartLinha{
     grid-area: cartLinha;
     display: flex;
    border-width: 2px;
    border-style: dotted;
    border-top: 0 solid transparent;
  margin-top: 5rem;
 
 }

 #cartText {
  grid-area: cartText;
    display: flex;
    border-width: 4px;
    font-size: 15px;
    border-top: 0 solid transparent;
    margin-top: 5rem;
    margin-bottom: 2rem;
    align-items: center;

 }

 // Segunda Linha 

 // Primeira coluna

 .styleImg4 {
   
   display: grid;
  
   grid-template-areas: "messageImg mensageTitle" "mensageLinha mensageLinha" "mesageText mesageText";
   grid-template-rows: 5rem 3rem ;
  grid-template-columns: 9rem 15em;
   
 }
    
 #mensageImg {
 grid-area: mensageImg;
 
 }

 #mensageTitle {
   grid-area: mensageTitle;
   margin-top: 2rem;
  font-size: 25px;
  font-weight: 500;

 }
 #mensageLinha{
     grid-area: mensageLinha;
     display: flex;
    border-width: 2px;
    border-style: dotted;
    border-top: 0 solid transparent;
  margin-top: 5rem;
 
 }

 #mesageText {
  grid-area: mesageText;
  display: flex;
    border-width: 4px;
    font-size: 15px;
    border-top: 0 solid transparent;
    margin-top: 5rem;
    margin-bottom: 2rem;
    align-items: center;

 }

 .styleImg5 {
   
   display: grid;
   grid-template-areas: "videoImg videoTitle" "videoLinha videoLinha" "videoText videoText";
   grid-template-rows: 5rem 3rem ;
  grid-template-columns: 9rem 15em;
   
 }
      
 #videoImg {
 grid-area: videoImg;
 
 }

 #videoTitle {
   grid-area: videoTitle;
   margin-top: 2rem;
  font-size: 25px;
  font-weight: 500;

 }

 #videoLinha{
     grid-area: videoLinha;
     display: flex;
    border-width: 2px;
    border-style: dotted;
    border-top: 0 solid transparent;
  margin-top: 5rem;
 }
 #videoText {
  grid-area: videoText;
  display: flex;
    border-width: 4px;
    font-size: 15px;
    border-top: 0 solid transparent;
    margin-top: 5rem;
    margin-bottom: 2rem;
    align-items: center;
 }

 .styleImg6 {
   
   display: grid;
   grid-template-areas: "alvoImg alvoTitle" "alvoLinha alvoLinha" "alvoText alvoText";
   grid-template-rows: 5rem 3rem ;
  grid-template-columns: 9rem 15em;
  
 }
 
 #alvoImg {
 grid-area: alvoImg;

 }

 #alvoTitle {
   grid-area: alvoTitle;
   margin-top: 2rem;
  font-size: 25px;
  font-weight: 500;

 }
 #alvoLinha{
     grid-area: alvoLinha;
     display: flex;
    border-width: 2px;
    border-style: dotted;
    border-top: 0 solid transparent;
  margin-top: 5rem;
 
 }

 #alvoText {
  grid-area: alvoText;
  display: flex;
    border-width: 4px;
    font-size: 15px;
    border-top: 0 solid transparent;
    margin-top: 5rem;
    margin-bottom: 2rem;
    align-items: center;
 }

 // Inciando nova estilização
 .container {
   position: relative;
   margin-bottom: 10rem;
   padding: 2rem;
   border-radius: 10px;
   transition: 0.3s;

   &:hover {
background-color: #3f7c72;
color: #ffffff;
   }
 }
 
 .container button {
   position: relative;
   background: transparent;
   color: #ffffff;
   border-radius: 8px;
   z-index: 99;
   left: 14rem;
   display: grid;
   grid-template-areas: "buton";
   grid-template-rows: 12px 12px ;
  grid-template-columns:  7rem 0em;
  
 }

 button {
   grid-area: buton;
font-size: 20px;
padding: 5px 10px;
color: #ffffff;
border: solid 1px #ffffff;
display: flex;
margin-bottom: 5rem;
transform: translateY(-95%) scale(0);
transition: 0s;

 }

.active {
  transform: translate(0) scale(1);
}

`