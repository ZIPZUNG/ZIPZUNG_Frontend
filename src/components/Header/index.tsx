import React from 'react'
import * as S from './style'

const Header = () => {
	return (
		<S.HeaderWrap>
			<S.HeaderLogoWrap to="/">
				<S.HeaderLogo src={'/assets/logo.png'} />
				<S.HeaderLogoText>ZIPZUNG</S.HeaderLogoText>
			</S.HeaderLogoWrap>
			<S.NavigationWrap>
				<S.Navigation to="/search">공인중개사</S.Navigation>
				<S.Navigation to="/search">생활 서비스 신청</S.Navigation>
				<S.Navigation to="/search">집중 케어</S.Navigation>
				<S.Navigation to="/application">프로필 등록</S.Navigation>
			</S.NavigationWrap>
			<S.LoginWrap>
				<S.LoginButton>로그인 및 회원가입</S.LoginButton>
			</S.LoginWrap>
		</S.HeaderWrap>
	)
}

export default Header
