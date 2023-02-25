import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HomeWrap = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const HomeSubWrap = styled.div`
	width: 100vw;
	margin-top: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const HomeListTitle = styled.div`
	font-size: 24px;
	font-weight: 700;
	width: 92vw;
	margin: 0 0 12px 0;
`

export const ServiceWrap = styled.div`
	width: 100vw;
	height: 50%;
	background-color: pink;
`

export const HomeSubListWrap = styled.div`
	display: flex;
	width: 92vw;
	align-items: center;
	margin-bottom: 42px;
`

export const HomeSubList = styled(Link)`
	width: 18vw;
	height: 18vh;
	text-decoration: none;
	color: black;
	margin: 0 16px 0 16px;
	text-align: center;

	&:first-child {
		margin-left: 0;
	}
`

export const HomeSubImg = styled.img`
	width: 100%;
	height: 100%;
	border: 2px solid #ccc;
	border-radius: 6px;
`

export const HomeSubTitle = styled.div`
	margin-top: 4px;
	font-size: 18px;
	font-weight: 700;
`
