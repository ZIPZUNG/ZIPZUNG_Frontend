import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LifeWrap = styled.div`
	width: 100vw;
	height: 88vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const LifeBox = styled.div`
	margin-top: 40px;
	width: 32vw;
	height: fit-content;
	border: 2px solid #ccc;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const LifeLogoWrap = styled.div`
	margin: 40px 0 20px 0;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const LifeLogo = styled.img`
	width: 32px;
	height: 32px;
`

export const LifeText = styled.span`
	font-size: 20px;
	font-weight: 700;
	margin-left: 8px;
`

export const LifeDescription = styled.span`
	font-size: 12px;
	margin-bottom: 10px;
`

export const LifeInputWrap = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	width: 300px;
`

export const LifeInputTitle = styled.span`
	font-size: 14px;
	font-weight: 600;
`

export const LifeInput = styled.input`
	width: 300px;
	height: 38px;
	margin: 8px 0 8px 0;
	font-size: 14px;
	padding-left: 12px;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 4px;
	outline: none;
`

export const LifeTextarea = styled.textarea`
	width: 300px;
	height: 260px;
	margin: 8px 0 8px 0;
	font-size: 12px;
	padding: 10px 12px 0 12px;
	box-sizing: border-box;
	resize: none;
	border: 1px solid #ccc;
	border-radius: 4px;
	outline: none;
`

export const LifeButton = styled.button`
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

export const NavigateLife = styled(Link)`
	margin-top: 10px;
	text-decoration: none;
	color: black;
	font-size: 14px;
	font-weight: 600;
	margin-bottom: 20px;
	span {
		color: blue;
		font-weight: 700;
	}
`

export const LifeCheck = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
`

export const LifeCheckWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2px auto 2px 0;
`

export const LifeCheckbox = styled.input``

export const LifeCheckLabel = styled.label`
	margin-left: 4px;
	font-size: 14px;
	font-weight: 600;
`

export const HashTagInput = styled.input`
	width: 70px;
	height: 26px;
	margin: 6px 12px 2px 12px;
	font-size: 14px;
	box-sizing: border-box;
	border: none;
	border-bottom: 1px solid black;
	outline: none;

	&:first-child {
		margin-left: 0;
	}
`

export const LifeInputFile = styled.input`
	margin-top: 8px;
`
