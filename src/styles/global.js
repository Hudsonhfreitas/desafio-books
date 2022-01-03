import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Heebo', sans-serif;
    }

    html {
        font-size: 62.5%;

        @media screen and (max-width: 991px) {
            font-size: 55%;
        }

        @media screen and (max-width: 620px) {
            font-size: 62.5%;
        }
    }

    html, #root {
        height: 100vh;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    } 

    button {
        cursor: pointer;
    }

    input {
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: #FFF;
        outline: none;
    }

`