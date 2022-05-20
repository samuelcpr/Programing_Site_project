import styled from "styled-components";

export const Container = styled.header`
.topBar {
    display: flex;
    align-items: center;
    width: auto;
    background-color: #0F0F0F;
    width: 100%;
}
.logoImg {
    width: auto;
    padding: 5px 20px;
}

.logoImg img {
    height: 6rem;
    border: 1px solid;
    border-radius: 5px;
}
.divisor {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
nav a {
    height: auto;
    width: auto;
    padding: 20px 20px 20px 20px;
    /* é utilizado para retirar stilo da teg a*/
    text-decoration: none;
    color: #fff;
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