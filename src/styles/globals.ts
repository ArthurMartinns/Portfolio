import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        overflow: hidden;
    }

    html {
        text-decoration: none;
        list-style: none;
        font-family: "Sora", sans-serif;
        font-size: 62.5%;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    }

    a {
        cursor: pointer;
        text-decoration: none;
        color: #000;
        font-size: 20px;
    }

`