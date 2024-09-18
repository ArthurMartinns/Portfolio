import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.div`

    width: 100%;
    margin: 0 auto;
    max-width: 1216px;

    @media screen and (min-width: ${breakpoints.desktopLarge}){
        width: 100%;
        margin: 0 auto;
        max-width: 1546px;
    }

    @media screen and (max-width: ${breakpoints.mobileLarge}){
        max-width: 315px;
        padding: 0rem 1rem;
    }
`