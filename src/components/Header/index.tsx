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
				<S.Navigation to="/search?type=estate">공인중개사</S.Navigation>
				<S.Navigation to="/search?type=life">생활서비스</S.Navigation>
				<S.Navigation to="/care">집중케어</S.Navigation>
			</S.NavigationWrap>
			<S.LoginButtonWrap to="/login">
				<S.LoginButton>로그인 및 회원가입</S.LoginButton>
			</S.LoginButtonWrap>
			<S.NavigationSideWrap>
				<S.NavigationSide>전문가 등록</S.NavigationSide>
				<S.NavigationHoverWrap id="hover">
					<S.NavigationHover to="/estate">공인중개사 등록</S.NavigationHover>
					<S.NavigationHover to="/life">생활전문가 등록</S.NavigationHover>
				</S.NavigationHoverWrap>
			</S.NavigationSideWrap>
		</S.HeaderWrap>
	)
}

export default Header
