import React from 'react'
import * as S from './style'
import Logo from 'assets/logo.svg'
import Search from 'assets/search.svg'

const Header = () => {
	return (
		<S.HeaderWrap>
			<S.HeaderContainer>
				<S.HeaderNavigationWrap margin="right">
					<S.HeaderLogoImage src={Logo} />
					<S.HeaderNavigator to="">중개사매칭</S.HeaderNavigator>
					<S.HeaderNavigator to="">생활서비스</S.HeaderNavigator>
					<S.HeaderNavigator to="">집중케어</S.HeaderNavigator>
					<S.HeaderNavigator to="">커뮤니티</S.HeaderNavigator>
				</S.HeaderNavigationWrap>
				<S.HeaderNavigationWrap margin="left">
					<S.SearchWrap>
						<S.SearchInput type="text" />
						<S.SearchButton src={Search} />
					</S.SearchWrap>
					<S.HeaderNavigator to="">중개사등록</S.HeaderNavigator>
					<S.HeaderNavigator to="">로그인</S.HeaderNavigator>
					<S.SignupButton>회원가입</S.SignupButton>
				</S.HeaderNavigationWrap>
			</S.HeaderContainer>
		</S.HeaderWrap>
	)
}

export default Header
