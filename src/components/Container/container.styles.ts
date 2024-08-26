import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1216px;
    margin: 0 auto;
    @media (max-width: 1920px) {
        max-width: 1548px;
    }

    @media (min-width: 1440px) {
        max-width: 1216px;
    }

    @media (min-width: 1024px) {
        max-width: 884px;
    }
`