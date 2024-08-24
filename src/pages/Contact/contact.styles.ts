import styled from "styled-components";

export const Profile = styled.div`
    width: 100%;
    height: 82vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`

export const WrapperProfile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.8rem;
`

export const BodyProfile = styled.div`
    width: 100%;
    border-radius: 8px;
    padding: 2.8rem;
    background-color: ${({theme}) => theme.COLORS.DARK};
`

export const ContentMain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;

    > textarea {
        resize: none;
        height: 10rem;
        background-color: transparent;
        border-radius: 1rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        padding: 2rem;
        font-family: "Sora", sans-serif;
    }

    > textarea::placeholder{
        font-family: "Sora", sans-serif;
    }
`

export const Title = styled.div`
    height: 5rem;
    width: 100%;
    color: #fff;
    border-bottom: 1px solid #fff; 
`
export const Title_h2 = styled.div`
    font-weight: 700;
    color: #fff;
    font-size: 2.4rem;
`

export const WrapperUserProfile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
`

export const LeftUserProfile = styled.div`
    width: 100%;
    max-width: 45rem;
    display: flex;
    align-items: center;
    gap: 3.2rem;
    position: relative;
`

export const ImgProfile = styled.div`
    border: 2px solid ${({theme}) => theme.COLORS.GRAY};
    border-radius: 1.6rem;
    width: 100%;
	max-width: 20rem;
	height: 20rem;
	cursor: pointer;

	> img {
        width: 20rem;
        height: 20rem;
		:hover {
			border: 5px solid #0079af;
		}
	}
`
export const BoxText = styled.div`
    width: 100%;
    max-width: 18.6rem;
    display: flex;
    flex-direction: column;
    gap: .8rem;
`

export const TitleBoxText = styled.div`
    color: #ffffff;
	font-size: 1.6rem;
	font-weight: 700;
`

export const TextBoxTxt = styled.div`
    color: #ffffff;
	font-size: 1.3rem;
	font-weight: 400;
`

export const RightUserProfile = styled.div`
    width: 100%;
    display: flex;
    gap: 3.0rem;
    flex-direction: column;
    justify-content: center;


    > input {
        padding: 2rem;
        background-color: transparent;
        border: 2px solid ${({theme}) => theme.COLORS.GRAY};
        border-radius: 1.0rem;
        font-family: "Sora", sans-serif;
    }

    > input::placeholder {
        font-family: "Sora", sans-serif;
    }
`

export const TitleTextArea = styled.div`
    width: 5rem;
    width: 100%;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.WHITE};
`
export const h2_TextArea = styled.div`
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-bottom: 2rem;
`

export const Button_Send = styled.button`
    background-color: ${({theme}) => theme.COLORS.GRAY};
    color: ${({theme}) => theme.COLORS.WHITE};
    padding: 1rem;
    border: ${({theme}) => theme.COLORS.GRAY};
    border-radius: 0.8rem;
    font-weight: 500;
    font-size: 1.6rem;
`