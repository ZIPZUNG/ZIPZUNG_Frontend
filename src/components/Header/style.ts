import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderWrap = styled.div`
	width: 100vw;
	height: 64px;
	display: flex;
	padding-bottom: 8px;
	border-bottom: 1px solid #ccc;

	@media ALL and (max-width: 600px) {
		justify-content: center;
		align-items: center;
		padding-bottom: 0;
	}
`

export const HeaderLogoWrap = styled(Link)`
	width: 200px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: black;
`

export const HeaderLogo = styled.img`
	width: 40px;
	height: 40px;
	margin-left: 20px;

	@media ALL and (max-width: 600px) {
		margin-left: 0;
	}
`

export const HeaderLogoText = styled.span`
	font-size: 24px;
	margin-left: 8px;
	color: black;
	font-family: 'Open Sans', sans-serif;
`

export const NavigationWrap = styled.div`
	width: fit-content;
	height: 100%;
	margin-left: 40px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media ALL and (max-width: 600px) {
		display: none;
	}
`

export const Navigation = styled(Link)`
	margin: 6px 30px 0 30px;
	font-size: 16px;
	font-weight: 600;
	cursor: pointer;
	text-decoration: none;
	color: black;
`

export const LoginButtonWrap = styled(Link)`
	width: 200px;
	height: 100%;
	display: flex;
	margin-left: auto;
	justify-content: center;
	align-items: center;
	text-decoration: none;

	@media ALL and (max-width: 600px) {
		display: none;
	}
`

export const LoginButton = styled.button`
	width: 130px;
	cursor: pointer;
	margin-top: 6px;
	border: none;
	border-radius: 4px;
	height: 36px;
	background-color: black;
	color: white;
`
