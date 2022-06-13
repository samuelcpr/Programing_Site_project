import styled from "styled-components";

export const FooterContainer = styled.div`
margin: 0;
padding: 0;
background-color: #F3F3F3;
height: auto;
width: auto;

.footer1 {
    display: grid;
    grid-column: 1fr;
    grid-area: 1fr 1fr;
    justify-content: center;

    margin: 2rem;

h1{
    margin: 2rem 2rem 2rem 22rem;
    font-size: 40px;
    font-weight: 200;
    font-family: Arial, Helvetica, sans-serif;
    color: #000111;
}

img{
    height: 18rem;
   
}
}
.imgFooter {
    background-color: #000111;
    display: grid;
    padding: 10rem;
    grid-template-areas: "M1 M2";
    grid-column: 50% 50%;
    justify-content: center;

    #M1{
        height: 4rem;
        grid-area: M1;
    }

    #M2 {
        height: 4rem;
        grid-area: M2;
    }

    
}

.textFooter {
   display: flex;
   justify-content: center;
}
` 