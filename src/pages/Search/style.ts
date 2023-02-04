import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SearchWrap = styled.div`
	width: 100vw;
	height: fit-content;
	min-height: 100vh;
`

export const SearchResultWrap = styled.div`
	width: 100vw;
	height: fit-content;
	display: flex;
	margin-top: 20px;
	flex-direction: column;
	align-items: center;
`

export const SearchResult = styled(Link)`
	text-decoration: none;
	color: black;
	cursor: pointer;
	width: 82vw;
	height: 34vh;
	border-bottom: 1px solid #ccc;
	display: flex;

	&:hover {
		background-color: #f2f3f7;
	}

	@media ALL and (max-width: 600px) {
		width: 100vw;
	}
`

export const SearchProfileImageWrap = styled.div`
	height: 100%;
	width: 20%;
	display: flex;
	justify-content: center;

	@media ALL and (max-width: 600px) {
		width: 20vw;
		margin-left: 4px;
	}
`

export const SearchProfileImage = styled.img`
	width: 120px;
	height: 120px;
	border-radius: 999px;
	margin-top: 30px;
	border: 1px solid #ccc;

	@media ALL and (max-width: 600px) {
		width: 60px;
		height: 60px;
	}
`

export const SearchProfileWrap = styled.div`
	height: 100%;
	width: 80%;
	display: flex;
	flex-direction: column;

	@media ALL and (max-width: 600px) {
		width: 78vw;
		margin: 0 8px 0 8px;
	}
`

export const ProfileName = styled.span`
	font-size: 20px;
	font-weight: 700;
	margin-top: 30px;
`

export const ProfileDescription = styled.span`
	margin-top: 8px;
	font-size: 16px;
	font-weight: 500;

	@media ALL and (max-width: 600px) {
		font-size: 14px;
	}
`

export const ProfileInfo = styled.span`
	margin-top: 12px;
	font-size: 14px;
	color: rgba(0, 0, 0, 0.8);
`

export const ProfileLine = styled.div`
	margin: 12px 0 16px 0;
	width: 100%;
	height: 1px;
	background-color: #ccc;
`

export const HashTagWrap = styled.div`
	display: flex;
`

export const HashTag = styled.div`
	width: fit-content;
	border-radius: 999px;
	margin: 0 4px 0 4px;
	font-size: 14px;
	padding: 4px 12px 4px 12px;
	background-color: #f2f3f7;
`
