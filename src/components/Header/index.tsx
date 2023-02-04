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
				<S.Navigation to="/search">아파트</S.Navigation>
				<S.Navigation to="/search">주택/원룸</S.Navigation>
				<S.Navigation to="/search">상가/오피스</S.Navigation>
				<S.Navigation to="/search">토지/공장</S.Navigation>
				<S.Navigation to="/search">특수 부동산</S.Navigation>
			</S.NavigationWrap>
			<S.LoginWrap>
				<S.LoginButton>로그인 및 회원가입</S.LoginButton>
			</S.LoginWrap>
		</S.HeaderWrap>
	)
}

export default Header
