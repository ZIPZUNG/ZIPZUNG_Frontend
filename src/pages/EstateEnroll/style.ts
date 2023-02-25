import styled from 'styled-components'

export const EstateWrap = styled.div``

export const EstateBoxWrap = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	align-items: center;
`

export const EstateBoxTitle = styled.span`
	margin: 20px 0 30px 0;
	font-size: 28px;
	font-weight: 800;
`

export const EstateBoxDescription = styled.span`
	font-size: 16px;
	font-weight: 500;
`

export const EstateBoxQuestionWrap = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px 0 20px 0;
	width: 400px;
`

export const EstateBoxQuestion = styled.span`
	margin-top: 10px;
	font-size: 18px;
	font-weight: 600;
	color: rgba(0, 0, 0, 0.6);

	span {
		font-size: 14px;
	}
`

export const EstateBoxInput = styled.input`
	margin-top: 6px;
	width: 360px;
	height: 32px;
	font-weight: 500;
	outline: none;
	border: none;
	font-size: 16px;
	border-bottom: 2px solid black;
`

export const EstateBoxTextarea = styled.textarea`
	margin-top: 6px;
	width: 340px;
	height: 200px;
	font-weight: 500;
	outline: none;
	border: 2px solid black;
	border-radius: 6px;
	font-size: 14px;
	padding: 10px;
	resize: none;
`

export const EstateBoxFile = styled.input`
	margin-top: 6px;
	width: 340px;
`

export const EstateBoxOptionWrap = styled.div`
	display: flex;
	margin-top: 10px;
	align-items: center;
`

export const EstateBoxOption = styled.input`
	width: 14px;
	height: 14px;
`

export const EstateBoxLabel = styled.label`
	font-size: 16px;
	font-weight: 600;
	margin-right: 4px;
`

export const EstateBoxSubmit = styled.button`
	width: 360px;
	height: 46px;
	background-color: black;
	border: none;
	color: white;
	cursor: pointer;
	font-size: 18px;
	font-weight: 600;
	border-radius: 8px;
	margin-bottom: 40px;
`
