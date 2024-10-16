import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Content = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color:  rgba(22, 22, 22, 0.8);
`

export const Left = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 40px;


    > div p{
        color: #fff;
    }

    padding: 3rem;
`

export const Right = styled.div`
    width: 100%;
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        background-blend-mode: darken;
        filter: grayscale(100%);
        box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
    }
`

export const LeftTop = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.2rem;

    p:first-child {
        font-size: 2.6rem;
        color: ${({theme}) => theme.COLORS.GRAY};
        font-weight: 700;
    }

    p {
        font-size: 2.2rem;
        font-weight: 800;
    }

    p:last-child{
        font-size: 1.6rem;
        font-weight: 400;
    }

`

// export const LeftMid = styled.div`
//     width: 100%;
//     font-size: 1.2rem;
//     max-width: 45rem;
//     line-height: 1.8rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-align: justify;
    
//     > p {
//         font-weight: 400;
//         color: ${({theme}) => theme.COLORS.GRAY};
//     }
// `


// export const LeftBottom = styled.div`
//     width: 100%;
//     display: flex;
//     align-items: center;
//     flex-direction: row;
//     gap: .8rem;
// `


// export const Itens = styled.div`
//     width: 5rem;
//     height: 5rem;
//     border-radius: 1rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     svg {
//         font-size: 3em;
//         color: ${({theme}) => theme.COLORS.GRAY};
//     }
// `