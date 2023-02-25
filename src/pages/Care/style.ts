import styled from 'styled-components'

export const CareWrap = styled.div``

export const CareBoxWrap = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	align-items: center;
`

export const CareBoxTitle = styled.span`
	margin: 20px 0 30px 0;
	font-size: 28px;
	font-weight: 800;
`

export const CareBoxDescription = styled.span`
	font-size: 16px;
	font-weight: 500;
`

export const CareBoxQuestionWrap = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px 0 20px 0;
	width: 400px;
`

export const CareBoxQuestion = styled.span`
	margin-top: 10px;
	font-size: 18px;
	font-weight: 600;
	color: rgba(0, 0, 0, 0.6);

	span {
		font-size: 14px;
	}
`

export const CareBoxInput = styled.input`
	margin-top: 6px;
	width: 360px;
	height: 32px;
	font-weight: 500;
	outline: none;
	border: none;
	font-size: 16px;
	border-bottom: 2px solid black;
`

export const CareBoxTextarea = styled.textarea`
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

export const CareBoxFile = styled.input`
	margin-top: 6px;
	width: 340px;
`

export const CareBoxOptionWrap = styled.div`
	display: flex;
	margin-top: 10px;
	align-items: center;
`

export const CareBoxOption = styled.input`
	width: 14px;
	height: 14px;
`

export const CareBoxLabel = styled.label`
	font-size: 16px;
	font-weight: 600;
	margin-right: 4px;
`

export const CareBoxSubmit = styled.button`
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
