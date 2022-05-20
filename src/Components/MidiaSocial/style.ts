import styled from "styled-components";

export const Midiasocial = styled.div`
.linhaElement01 {
    display: flex;
    height: 20rem;
    justify-content: space-around;
    align-items: center;
    margin: 2rem 0 7rem 0;
    
    
}

.linhaElement01 img {
    height: 10rem;
    margin-bottom: 20rem;
    

  

    }
   
 




//linha 2

.linhaElement02 {
  display: flex;
    height: 20rem;
    justify-content: space-around;
    align-items: center;
    margin: 2rem 0 0 0;
}
.linhaElement02 img {
  height: 10rem;
    
    
}


// Primeira coluna de Mídias 
.styleImg1 {
   
  display: grid;
 

  grid-template-areas: "item1 item2" "linha linha" ;
  grid-template-rows: 7rem 5rem ;
  grid-template-columns: 10rem 16rem;
}
   
    
   



#item1 {
grid-area: item1;



}
#item2 {
  grid-area: item2;
margin-top: 4rem;
font-size: 25px;
font-weight: 400;
}
#linha{
    grid-area: linha;
    display: flex;
    border-width: 4px;
    border-style: dotted;
    border-top: 0 solid transparent;
  margin-top: 5rem;

}
#texte {
  padding: 4rem 0;
}

// Segunda coluna de Mídias
.styleImg2 {
   
   display: grid;
  
 
   grid-template-areas: "elementoImg elementoTitle" "elementoLinha elementoLinha" ;
   grid-template-rows: 7rem 5rem ;
   grid-template-columns: 10rem 16rem;
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
    border-width: 4px;
    border-style: dotted;
    border-top: 0 solid transparent;
   margin-top: 5rem;
 
 
 }


//Terceira Coluna de mídia


.styleImg3 {
   
   display: grid;
  
 
   grid-template-areas: "cartImg cartTitle" "cartLinha cartLinha" ;
   grid-template-rows: 7rem 5rem ;
   grid-template-columns: 10rem 16rem;
   

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
    border-width: 4px;
    border-style: dotted;
    border-top: 0 solid transparent;
   margin-top: 5rem;
 
 
 }

 // Segunda Linha 

 // Primeira coluna

 .styleImg4 {
   
   display: grid;
  
  
 
   grid-template-areas: "messageImg mensageTitle" "mensageLinha mensageLinha" ;
   grid-template-rows: 7rem 5rem ;
   grid-template-columns: 10rem 16rem;
   

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
    border-width: 4px;
    border-style: dotted;
    border-top: 0 solid transparent;
   margin-top: 5rem;
 
 
 }

 .styleImg5 {
   
   display: grid;
  
 
   grid-template-areas: "videoImg videoTitle" "videoLinha videoLinha" ;
   grid-template-rows: 7rem 5rem ;
   grid-template-columns: 10rem 16rem;
   

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
    border-width: 4px;
    border-style: dotted;
    border-top: 0 solid transparent;
   margin-top: 5rem;
 
 
 }

 .styleImg6 {
   
   display: grid;
   grid-template-areas: "alvoImg alvoTitle" "alvoLinha alvoLinha" ;
   grid-template-rows: 7rem 5rem ;
   grid-template-columns: 10rem 16rem;
   
   

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
    border-width: 4px;
    border-style: dotted;
    border-top: 0 solid transparent;
   margin-top: 5rem;
 
 
 }

 .container {
   margin-bottom: 10rem;
   padding: 2rem;
   border-radius: 5px;
   z-index: 0;

   &:hover {
background-color: #3f7c72;
color: #ffffff;
   }
 }
 .ContainerButton {
   background-color: transparent;
   color: #ffffff;
   height: 480;
   width: 477.33;
   &:hover {
     background-color: #3f7c72;
     color: #ffffff;
   }
 }

 button {
background-color: 3f7c72;
color: #ffffff;
border: #ffffff;
  

   &:hover {
    background-color: #3f7c72;
color: #ffffff;
z-index: 1;
   }
 }


 

  
 


`