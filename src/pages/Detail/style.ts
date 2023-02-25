import styled from 'styled-components'

export const DetailWrap = styled.div`
	width: 100vw;
	display: flex;
	height: fit-content;
	flex-direction: column;
	align-items: center;
`

export const DetailMainWrap = styled.div`
	margin-top: 40px;
	width: 80vw;
	height: 100%;
	display: flex;
	flex-direction: column;

	@media ALL and (max-width: 600px) {
		width: 90vw;
	}
`

export const DetailProfileWrap = styled.div`
	width: 100%;
	height: 24vh;
	background-color: #f2f3f7;
	display: flex;
	margin-bottom: 20px;

	@media ALL and (max-width: 600px) {
		height: 20vh;
	}
`

export const DetailProfileImageWrap = styled.div`
	height: 100%;
	width: 20%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media ALL and (max-width: 600px) {
		width: 30%;
		align-items: flex-start;
	}
`

export const DetailProfileImage = styled.img`
	width: 120px;
	height: 120px;
	border-radius: 999px;
	border: 1px solid #ccc;

	@media ALL and (max-width: 600px) {
		width: 60px;
		height: 60px;
		margin-top: 40px;
	}
`

export const DetailProfileDescriptionWrap = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	flex-direction: column;
`

export const ProfileName = styled.span`
	font-size: 20px;
	font-weight: 700;
	margin-top: 40px;

	@media ALL and (max-width: 600px) {
		margin-top: 42px;
	}
`

export const ReviewCount = styled.span`
	margin-top: 18px;
	font-size: 14px;
	color: black;

	@media ALL and (max-width: 600px) {
		margin-top: 6px;
	}
`

export const HashTagWrap = styled.div`
	margin-top: 8px;
	display: flex;

	@media ALL and (max-width: 600px) {
		margin-top: 20px;
		width: 90vw;
	}
`

export const HashTag = styled.div`
	width: fit-content;
	border-radius: 999px;
	margin: 0 4px 0 4px;

	&:first-child {
		margin-left: 0;
	}
	font-size: 14px;
	padding: 4px 12px 4px 12px;
	background-color: black;
	color: white;
`

export const ContactWrap = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media ALL and (max-width: 600px) {
		display: none;
	}
`

export const ContactButton = styled.button`
	width: 240px;
	height: 42px;
	background-color: black;
	color: white;
	border-radius: 8px;
	font-size: 14px;
	font-weight: 600;
	margin: auto 0 30px 0;
	border: none;
`

export const ToggleSelectionWrap = styled.div`
	display: flex;
	margin-bottom: 20px;
`

export const ToggleSelection = styled.div`
	margin: 0 10px 0 10px;
	cursor: pointer;
	font-size: 18px;
	font-weight: 700;
	border-bottom: ${(props) => (props.color === 'true' ? '2px solid black' : '')};

	&:first-child {
		margin-left: 0;
	}
`

export const DetailInfoText = styled.span`
	font-size: 14px;
	font-weight: 800;
	margin: 6px 0 6px 0;
	span {
		font-weight: 500;
		font-size: 14px;
	}
`

export const DetailMainTitleText = styled.span`
	margin-top: 40px;
	font-size: 20px;
	font-weight: 700;
`

export const DetailMainDescriptionText = styled.span`
	margin-top: 2px;
	font-size: 16px;
	font-weight: 500;
	line-height: 26px;
	margin-bottom: 8px;
`

export const DetailMainNavigationWrap = styled.div`
	display: flex;
	align-items: center;
	margin-top: 8px;
`

export const DetailMainNavigation = styled.svg`
	&:first-child {
		margin-left: 0;
	}
	margin: 0 10px 0 10px;
`

export const DetailToggleView = styled.div`
	font-size: 14px;
	font-weight: 600;
	padding-top: 8px;
	border-top: 1px solid #ccc;
	width: 36vw;
	cursor: pointer;
	margin-bottom: 40px;

	span {
		margin-right: 4px;
	}
`

export const DetailCustomerReviewWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const DetailCustomerBox = styled.div`
	width: 78vw;
	background-color: #f2f3f7;
	padding: 20px;
	display: flex;
	flex-direction: column;
	margin: 4px 0 4px 0;
`

export const DetailCustomerTitle = styled.span`
	font-size: 16px;
	font-weight: 700;
`

export const DetailCustomerReview = styled.span`
	font-size: 14px;
`

export const DetailCustomerImgWrap = styled.div`
	display: flex;
`

export const DetailCustomerImg = styled.img`
	width: 120px;
	height: 100px;
	border-radius: 4px;
	margin: 12px 6px 0 6px;

	&:first-child {
		margin-left: 0;
	}
`
