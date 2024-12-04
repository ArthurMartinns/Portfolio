import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
    }

    html {
        list-style: none;
        font-family: "Sora", sans-serif;
        font-size: 62.5%;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    }

    a {
        cursor: pointer;
        color: #000;
        font-size: 20px;
    }

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
}

::-webkit-scrollbar-thumb {
  background:#263238;
}

::-webkit-scrollbar-thumb:hover {
  background: white;
}

`