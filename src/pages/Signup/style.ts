import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SignupWrap = styled.div`
	width: 100vw;
	height: 88vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const SignupBox = styled.div`
	width: 32vw;
	height: 82vh;
	border: 2px solid #ccc;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const SignupLogoWrap = styled.div`
	margin: 40px 0 20px 0;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const SignupLogo = styled.img`
	width: 32px;
	height: 32px;
`

export const SignupText = styled.span`
	font-size: 20px;
	font-weight: 700;
	margin-left: 8px;
`

export const SignupInput = styled.input`
	width: 280px;
	height: 36px;
	margin: 8px 0 8px 0;
	font-size: 14px;
	box-sizing: border-box;
	border: none;
	border-bottom: 1px solid #ccc;
	outline: none;
`

export const SignupButton = styled.button`
	margin-top: 30px;
	width: 320px;
	height: 46px;
	box-sizing: border-box;
	background-color: black;
	color: white;
	border: none;
	font-size: 16px;
	font-weight: 800;
	border-radius: 6px;
	cursor: pointer;
`

export const NavigateSignup = styled(Link)`
	margin-top: 10px;
	text-decoration: none;
	color: black;
	font-size: 14px;
	font-weight: 600;
	span {
		color: blue;
		font-weight: 700;
	}
`

export const SignupCheck = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
`

export const SignupCheckWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 3px auto 3px 0;
`

export const SignupCheckbox = styled.input``

export const SignupCheckLabel = styled.label`
	margin-left: 4px;
	font-size: 14px;
	font-weight: 600;
`

export const isNotMatchPasswordText = styled.span`
	font-size: 12px;
	font-weight: 600;
	color: red;
`
