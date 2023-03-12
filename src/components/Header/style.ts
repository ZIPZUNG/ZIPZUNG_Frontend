import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderWrap = styled.div`
	width: 100vw;
	height: 72px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const HeaderContainer = styled.div`
	width: 1200px;
	height: 100%;
	display: flex;
	align-items: center;
`

export const HeaderLogoImage = styled.img``

export const HeaderNavigationWrap = styled.div<{ margin: string }>`
	margin: ${(props) => (props.margin === 'left' ? '0 0 0 auto' : '0 auto 0 0')};
	display: flex;
	justify-content: center;
	align-items: center;
`

export const HeaderNavigator = styled(Link)`
	color: black;
	text-decoration: none;
	margin-left: 3vw;
`

export const SignupButton = styled.button`
	border: none;
	border-radius: 10px;
	width: 100px;
	height: 40px;
	background-color: #184bfe;
	font-size: 14px;
	color: white;
	font-weight: 500;
	margin-left: 2vw;
`

export const SearchWrap = styled.div`
	display: flex;
	width: 280px;
	height: 40px;
	border-radius: 22px;
	border: 1px solid #d9d9d9;
	justify-content: center;
	align-items: center;
`

export const SearchInput = styled.input`
	outline: none;
	border: none;
	margin-left: 20px;
	font-size: 14px;
`

export const SearchButton = styled.img`
	margin-left: auto;
	width: 24px;
	height: 24px;
	margin-right: 16px;
	cursor: pointer;
`
