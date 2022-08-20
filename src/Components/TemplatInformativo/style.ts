import styled from "styled-components";

export const Bannerinformativo = styled.div`

.group {
    width: auto;
    background-color: #ffffff;
    display: flex;
    justify-content: baseline;
    align-items: center;
    padding-top: 10px 0;
    margin-bottom: 5rem;
    display: grid;
    grid-template-areas: "imgopção text button04" ;
  grid-template-rows: 42rem 0 ;
  grid-template-columns: 50% 50% 50%;

}
.imgopção {
    grid-area: imgopção;
    
}

.text {
    grid-area: text;
  
}
.button04 {
grid-area: button04;
}

.imgopção {
    width: auto;
    display: flex;
    justify-content: right;


}

.imgopção img {
   
    filter: grayscale(1);
    transition: .9s;
    margin: 0rem 0 0 14%;
    height: 5%;
    width: 80%;
   
}

.imgopção img:hover {
    filter: none;
}

.text {
    width: auto;
    display: block;
    align-items: center;
    margin: 10rem  0 0 2rem;
}

.text h1 {
    margin-top: 5rem;
    margin-bottom: 50px;
    color: #0a9d91;
    font-size: 48px;
    line-height: 55px;
    font-weight: 700 !important;
    filter: grayscale(1);
    transition: .9s;
    font-family: Lato,sans-serif;
}

.text h1:hover {
    filter: none;
}

.text p {
    font-family: Lato, sans-serif;
    font-size: 25px;
    line-height: 30px;
    filter: grayscale(1);
    transition: .9s;
    color: #423e3e;
}

.parceiros {
    
    width: auto;
    display: block;
    margin: 4rem 0 0 0;
}

.parceiros img {
    width: 60%;

   
    
}
.button04 {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    
   

a{
border: 1px solid;
border-radius: 5px;
text-decoration: none;
padding: 12px 30px;
font-size: 17px;
line-height: 0 2rem;
font-family: Arial, Helvetica, sans-serif;
filter: grayscale(1);
transition: .9s;
color: #666868;



&:hover {
    filter: none;
    background-color: #3F7C72;
    color: #fff;
   }
  }
}



 


    
`