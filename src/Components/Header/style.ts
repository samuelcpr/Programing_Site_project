import styled from "styled-components";

export const Container = styled.header`
.topBar {
    background-color: #0F0F0F;
    display: grid;
    grid-template-areas: "logoImg textmenu  button";
    grid-template-columns: 6% 82% 7%;
    grid-template-rows: rem;
}

.logoImg {
    grid-area: logoImg;
    

}
.textmenu {
display: flex;
grid-area: textmenu;
margin: 2rem;

#itens {
margin: 0 1rem ;
text-decoration: none;
color: #ffffff;
}
}


.button {
display: block;
grid-area: button;
margin: 2rem 0 0 2rem;


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