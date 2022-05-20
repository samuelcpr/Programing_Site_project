import styled from "styled-components";

export const Bannerinformativo = styled.div`
.group {
    width: auto;
    background-color: #fff;
    display: flex;
    justify-content: baseline;
    align-items: center;
    padding-top: 10px 0;
}

.imgopção {
    width: auto;
    margin: 3rem 2rem 0 10rem;

}

.imgopção img {
    width: auto;
    filter: grayscale(1);
    transition: .9s;
    margin: 0 0rem 2rem 10rem;
   
}

.imgopção img:hover {
    filter: none;
}

.text {
    display: block;
    align-items: center;
    margin: 2rem 0;
}

.text h1 {
    margin-top: 16rem;
    margin-bottom: 50px;
    font-size: 40px;
    color: #0a9d91;
    font-size: 40px;
    line-height: 45px;
    font-weight: 700!important;
    filter: grayscale(1);
    transition: .9s;
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
    width: 100%;
    vertical-align: middle;
    display: inline-block;
    margin: 3rem 0 0 0;
}

.parceiros img {
    width: 550px;
}
.button04 {
    display: flex;
    justify-content:right;

}

.button04 a{
border: 1px solid;
border-radius: 5px;
text-decoration: none;
margin-right: 19%;
padding: 9px 25px;
font-size: 18px;
font-family: Arial, Helvetica, sans-serif;
filter: grayscale(1);
transition: .9s;
color: #666868;
}

.button04 a:hover{
    filter: none;
    background-color: #3F7C72;
    color: #fff;
}
`