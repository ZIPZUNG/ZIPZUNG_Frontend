import { Header } from 'allFiles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'

const Signup = () => {
	const navigate = useNavigate()
	const onClickSignup = () => {
		navigate('/')
	}

	return (
		<>
			<Header />
			<S.SignupWrap>
				<S.SignupBox>
					<S.SignupLogoWrap>
						<S.SignupLogo src="/assets/logo.png" />
						<S.SignupText>ZIPZUNG</S.SignupText>
					</S.SignupLogoWrap>
					<S.SignupInput placeholder="이메일을 입력해주세요" />
					<S.SignupInput placeholder="닉네임을 입력해주세요" />
					<S.SignupInput placeholder="비밀번호를 입력해주세요" type="password" />
					<S.SignupInput placeholder="비밀번호를 재입력해주세요" type="password" />
					<S.SignupCheck>
						<S.SignupCheckWrap>
							<S.SignupCheckbox type="checkbox" id="1" name="signup" />
							<S.SignupCheckLabel htmlFor="1">집중 서비스 이용약관 동의(필수)</S.SignupCheckLabel>
						</S.SignupCheckWrap>
						<S.SignupCheckWrap>
							<S.SignupCheckbox type="checkbox" id="2" name="signup" />
							<S.SignupCheckLabel htmlFor="2">위치기반 서비스 이용약관 동의(필수)</S.SignupCheckLabel>
						</S.SignupCheckWrap>
						<S.SignupCheckWrap>
							<S.SignupCheckbox type="checkbox" id="3" name="signup" />
							<S.SignupCheckLabel htmlFor="3">개인정보처리방침 동의(필수)</S.SignupCheckLabel>
						</S.SignupCheckWrap>
						<S.SignupCheckWrap>
							<S.SignupCheckbox type="checkbox" id="4" name="signup" />
							<S.SignupCheckLabel htmlFor="4">만 14세 이상(필수)</S.SignupCheckLabel>
						</S.SignupCheckWrap>
					</S.SignupCheck>
					<S.SignupButton onClick={onClickSignup}>회원가입하기</S.SignupButton>
					<S.NavigateSignup to="/login">
						이미 계정이 있으신가요? <span>로그인하기</span>
					</S.NavigateSignup>
				</S.SignupBox>
			</S.SignupWrap>
		</>
	)
}

export default Signup
