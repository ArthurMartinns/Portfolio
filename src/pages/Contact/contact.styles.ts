import styled from "styled-components";

export const Profile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
`

export const WrapperProfile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 28px;
`

export const BodyProfile = styled.div`
    width: 100%;
    border-radius: 8px;
    padding: 28px;
    background-color: ${({theme}) => theme.COLORS.DARK};
`

export const ContentMain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
`

export const Title = styled.div`
    height: 50px;
    width: 100%;
    color: #fff;
    border-bottom: 1px solid #fff; 
`
export const Title_h2 = styled.div`
    font-weight: 700;
    color: #fff;
    font-size: 24px;
`

export const WrapperUserProfile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 32px;
`

export const LeftUserProfile = styled.div`
    width: 100%;
    max-width: 450px;
    display: flex;
    align-items: center;
    gap: 32px;
    position: relative;
`

export const ImgProfile = styled.div`
    border: 2px solid ${({theme}) => theme.COLORS.GRAY};
    width: 100%;
	max-width: 200px;
	height: 200px;
	cursor: pointer;

	> img {
		border-radius: 16px;

		:hover {
			border: 5px solid #0079af;
		}
	}
`
export const BoxText = styled.div`
    width: 100%;
    max-width: 186px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const TitleBoxText = styled.div`
    color: #ffffff;
	font-size: 16px;
	font-weight: 700;
`

export const TextBoxTxt = styled.div`
    color: #ffffff;
	font-size: 13px;
	font-weight: 400;
`

export const RightUserProfile = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: center;


    > input {
        padding: 20px;
        background-color: transparent;
        border: 2px solid ${({theme}) => theme.COLORS.GRAY};
        border-radius: 10px;
    }
`