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
    height: 9rem;
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
  grid-template-rows: 7rem 5rem ;
  grid-template-columns: 10rem 20rem;
}
   
    
   



#item1 {
grid-area: item1;



}
#item2 {
  grid-area: item2;
margin-top: 4rem;
font-size: 30px;
font-weight: 500;

}
#linha{
    grid-area: linha;
    display: flex;
    border-width: 3px;
    border-style: dotted;
    border-top: 0 solid transparent;
  margin-top: 5rem;

}
#texte{
    grid-area: texte;
    display: flex;
    border-width: 4px;
    font-size: 22px;
    border-top: 0 solid transparent;
    margin-top: 5rem;
    margin-bottom: 2rem;
    align-items: center;
    
}

// Segunda coluna de Mídias
.styleImg2 {
   
   display: grid;
  
 
   grid-template-areas: "elementoImg elementoTitle" "elementoLinha elementoLinha" "textMidia2 textMidia2";
   grid-template-rows: 7rem 5rem ;
   grid-template-columns: 10rem 20rem;
 }
    
     
    
 
 
 
 #elementoImg {
 grid-area: elementoImg;
 
 
 }
 #elementoTitle {
   grid-area: elementoTitle;
   margin-top: 4rem;
 font-size: 25px;
 font-weight: 400;

 }
 #elementoLinha{
     grid-area: elementoLinha;
     display: flex;
    border-width: 3px;
    border-style: dotted;
    border-top: 0 solid transparent;
   margin-top: 5rem;
 
 
 }
 #textMidia2 {
     grid-area: textMidia2;
    display: flex;
    border-width: 4px;
    font-size: 22px;
    border-top: 0 solid transparent;
    margin-top: 5rem;
    margin-bottom: 2rem;

 
 
 }


//Terceira Coluna de mídia


.styleImg3 {
   
   display: grid;
  
 
   grid-template-areas: "cartImg cartTitle" "cartLinha cartLinha" "cartText cartText";
   grid-template-rows: 7rem 5rem ;
   grid-template-columns: 10rem 20rem;
   

 }
    
     
    
 
 
 
 #cartImg {
 grid-area: cartImg;
 
 
 }
 #cartTitle {
   grid-area: cartTitle;
   margin-top: 4rem;
 font-size: 25px;
 font-weight: 400;

 }
 #cartLinha{
     grid-area: cartLinha;
     display: flex;
    border-width: 3px;
    border-style: dotted;
    border-top: 0 solid transparent;
   margin-top: 5rem;
 
 
 }
 #cartText {
  grid-area: cartText;
    display: flex;
    border-width: 4px;
    font-size: 22px;
    border-top: 0 solid transparent;
    margin-top: 5rem;
    margin-bottom: 2rem;
 }

 // Segunda Linha 

 // Primeira coluna

 .styleImg4 {
   
   display: grid;
  
  
 
   grid-template-areas: "messageImg mensageTitle" "mensageLinha mensageLinha" "mesageText mesageText";
   grid-template-rows: 7rem 5rem ;
   grid-template-columns: 10rem 20rem;
   

 }
    
     
    
 
 
 
 #mensageImg {
 grid-area: mensageImg;
 
 
 }
 #mensageTitle {
   grid-area: mensageTitle;
   margin-top: 4rem;
 font-size: 25px;
 font-weight: 400;

 }
 #mensageLinha{
     grid-area: mensageLinha;
     display: flex;
    border-width: 3px;
    border-style: dotted;
    border-top: 0 solid transparent;
   margin-top: 5rem;
 
 }

 #mesageText {
  grid-area: mesageText;
    display: flex;
    border-width: 4px;
    font-size: 22px;
    border-top: 0 solid transparent;
    margin-top: 5rem;
    margin-bottom: 2rem;
 }

 .styleImg5 {
   
   display: grid;
  
 
   grid-template-areas: "videoImg videoTitle" "videoLinha videoLinha" "videoText videoText";
   grid-template-rows: 7rem 5rem ;
   grid-template-columns: 10rem 20rem;
   

 }
      
 
 
 #videoImg {
 grid-area: videoImg;
 
 
 }
 #videoTitle {
   grid-area: videoTitle;
   margin-top: 4rem;
 font-size: 25px;
 font-weight: 400;

 }
 #videoLinha{
     grid-area: videoLinha;
     display: flex;
    border-width: 3px;
    border-style: dotted;
    border-top: 0 solid transparent;
   margin-top: 5rem;
 
 
 }

 .styleImg6 {
   
   display: grid;
   grid-template-areas: "alvoImg alvoTitle" "alvoLinha alvoLinha" "alvoText alvoText";
   grid-template-rows: 7rem 5rem ;
   grid-template-columns: 10rem 20rem;
  
 }
 
 #videoText {
  grid-area: videoText;
    display: flex;
    border-width: 4px;
    font-size: 22px;
    border-top: 0 solid transparent;
    margin-top: 5rem;
    margin-bottom: 2rem;
 }
 
 
 
 #alvoImg {
 grid-area: alvoImg;
 
 
 }
 #alvoTitle {
   grid-area: alvoTitle;
   margin-top: 4rem;
 font-size: 25px;
 font-weight: 400;

 }
 #alvoLinha{
     grid-area: alvoLinha;
     display: flex;
    border-width: 3px;
    border-style: dotted;
    border-top: 0 solid transparent;
   margin-top: 5rem;
 
 
 }

 #alvoText {
  grid-area: alvoText;
    display: flex;
    border-width: 4px;
    font-size: 22px;
    border-top: 0 solid transparent;
    margin-top: 5rem;
    margin-bottom: 2rem;
 }

 // Inciando nova estilização
 .container {
   position: relative;
   margin-bottom: 10rem;
   padding: 2rem;
   border-radius: 10px;
  

   &:hover {
background-color: #3f7c72;
color: #ffffff;
   }
 }
 
 .container button {
   position: relative;
   background: transparent;
   color: #ffffff;
   border-radius: 10px;
   z-index: 99;
 }


 button {
font-size: 25px;
padding: 1rem 4rem;
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