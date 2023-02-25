import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LoginWrap = styled.div`
	width: 100vw;
	height: 88vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const LoginBox = styled.div`
	width: 34vw;
	height: 70vh;
	border: 2px solid #ccc;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const LoginLogo = styled.img`
	width: 80px;
	height: 80px;
	margin-bottom: 20px;
`

export const LoginInput = styled.input`
	width: 340px;
	height: 42px;
	margin: 12px 0 12px 0;
	padding-left: 12px;
	font-size: 16px;
	box-sizing: border-box;
	border: none;
	border-bottom: 2px solid black;
	outline: none;
`

export const LoginButton = styled.button`
	margin-top: 80px;
	width: 340px;
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
