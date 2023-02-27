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
	box-sizing: border-box;
`

export const NavigationSideWrap = styled.div`
	width: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media ALL and (max-width: 600px) {
		display: none;
	}

	&:hover {
		#hover {
			display: block;
		}
	}
`

export const NavigationSide = styled.div`
	margin: 6px 30px 0 26px;
	width: 120px;
	height: 36px;
	border: 2px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	box-sizing: border-box;
	border-radius: 4px;
	text-decoration: none;
	color: black;
`

export const NavigationHoverWrap = styled.div`
	display: none;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 124px;
	height: 70px;
	background-color: black;
	position: fixed;
	top: 8%;
	border: 2px solid black;
	font-size: 14px;
	font-weight: 500;
`

export const NavigationHover = styled(Link)`
	width: 120px;
	height: 32px;
	border: 2px solid white;
	display: flex;
	justify-content: center;
	align-items: center;
	&:last-child {
		border-top: none;
	}
	color: white;
	text-decoration: none;
`
