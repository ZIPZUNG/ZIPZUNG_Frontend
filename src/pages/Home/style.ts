import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HomeWrap = styled.div`
	width: 100vw;
	height: 100vh;
`

export const MainBackgroundInfoWrap = styled.div`
	width: 100vw;
	height: 61vh;
	background-image: url('/assets/background.png');
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media ALL and (max-width: 600px) {
		background-image: none;
		height: 100%;
	}
`

export const MainBackboardWrap = styled.div`
	width: 56vw;
	height: 44vh;
	background-color: rgba(255, 255, 255, 0.8);
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ALL and (max-width: 600px) {
		display: flex;
		width: 100%;
		height: 100%;
	}
`

export const MainTitleText = styled.span`
	margin-top: 60px;
	font-size: 34px;
	font-weight: 800;

	@media ALL and (max-width: 600px) {
		margin: 70px 0 0 20px;
		width: 100vw;
		font-size: 22px;
	}
`

export const MainSelectionBar = styled.div`
	margin-top: 40px;
	width: 580px;
	height: 42px;
	background-color: black;
	border-radius: 8px;
	display: flex;

	@media ALL and (max-width: 600px) {
		display: none;
	}
`

export const MainSelectionBarPhoneFirst = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 14px;

	@media ALL and (min-width: 600px) {
		display: none;
	}
`

export const MainSelectionBarPhone = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;

	@media ALL and (min-width: 600px) {
		display: none;
	}
`

export const MainSelectionPhone = styled(Link)`
	width: 2000px;
	height: 140px;
	margin: 0 6px 0 6px;
	border-radius: 8px;
	border: 1px solid #ccc;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 800;
	flex-direction: column;
	color: black;
	text-decoration: none;

	&:hover {
		background-color: #f2f3f7;
	}

	span {
		margin-top: 10px;
		font-size: 16px;
	}

	@media ALL and (min-width: 600px) {
		display: none;
	}
`

export const MainRecommendButtonPhone = styled.button`
	margin-top: 40px;
	width: 96vw;
	height: 60px;
	font-size: 18px;
	font-weight: 800;
	color: white;
	background-color: black;
	border: none;
	border-radius: 8px;

	@media ALL and (min-width: 600px) {
		display: none;
	}
`

export const MainSelection = styled.div`
	width: 20%;
	height: 100%;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 800;
	color: white;

	&:first-child {
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}

	&:last-child {
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
	}

	&:hover {
		animation: fadein 0.6s;
		animation-fill-mode: forwards;
	}
`

export const MainSearchWrap = styled.div`
	margin-top: 20px;
	width: 580px;
	height: 48px;
	display: flex;

	@media ALL and (max-width: 600px) {
		display: none;
	}
`

export const MainSearchInput = styled.input`
	width: 76%;
	height: 100%;
	background-color: white;
	outline: none;
	border: 1px solid #ccc;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	padding-left: 22px;
	font-size: 18px;
	font-weight: 600;
`

export const MainSearchButton = styled.button`
	width: 24%;
	height: 103%;
	background-color: black;
	color: white;
	font-size: 18px;
	font-weight: 800;
	border: 1px solid #ccc;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	border-left: none;
	cursor: pointer;
`

export const PhoneWrap = styled.div`
	width: 100vw;
	height: 27vh;
	background-color: #f3f5f5;
	display: flex;
	justify-content: center;
	align-items: center;

	@media ALL and (max-width: 600px) {
		display: none;
	}
`

export const PhoneMockupImage = styled.img`
	margin-top: auto;
	height: 90%;
`

export const PhoneDownloadWrap = styled.div`
	margin-left: 20px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const PhoneTitleText = styled.span`
	font-size: 22px;
	font-weight: 700;
`

export const PhoneButtonWrap = styled.div`
	display: flex;
`

export const ButtonImage = styled.img`
	margin: 18px 6px 0 6px;
	width: 120px;
	height: auto;
`
