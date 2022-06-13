import styled from "styled-components";

export const Container = styled.header`
.topBar {
    width: 100%;
    background-color: #0F0F0F;
    display: grid;
    grid-template-areas: "logoImg textmenu  button";
    grid-template-columns: 5rem 82% 7%;
    counter-increment: item;
    
    
    z-index: calc(10 - attr(i integer)); /* nope */
    z-index: calc(10 - counter(item)); /* nope */
}

.logoImg {
    grid-area: logoImg;
    padding-top: 9px;
    padding-bottom: 3px;
    
    a {
       
      margin :1rem ;
      
    }

}
.textmenu {

display: flex;
grid-area: textmenu;
margin: 2rem 2rem 2rem 2rem;
align-items: center;

#itens {
margin: 0 1rem ;
text-decoration: none;
color: #ffffff;
}
}


.button {
display: block;
grid-area: button;
margin: 2.4rem 0 0 2rem;
align-items: center;


}

.button a {
    padding: 10px 20px;
    background-color: black;
    border: 1px solid #fff;
    color: #fff;
    margin: 0 20px;
    border-radius: 5px;
    transition: .9s;
    text-decoration: none;
}
.button a:hover {
    filter: none;
    background-color: #3F7C72;
    color: #fff;
}

`