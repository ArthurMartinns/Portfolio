import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        list-style: none;
        font-family: "Sora", sans-serif;
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        min-height: 100vh;
        background-color: ${({ theme }) => theme.colors.background.primary};
        color: ${({ theme }) => theme.colors.text.primary};
    }

    a {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.text.primary};
        font-size: 1.6rem;
    }

    button {
        font-family: inherit;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
        }
    }
`