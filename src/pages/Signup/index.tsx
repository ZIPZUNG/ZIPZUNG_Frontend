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
					<S.SignupLogo src="/assets/logo.png" />
					<S.SignupInput placeholder="사용하실 이메일을 입력해주세요" />
					<S.SignupInput placeholder="사용하실 닉네임을 입력해주세요" />
					<S.SignupInput placeholder="사용하실 비밀번호를 입력해주세요" type="password" />
					<S.SignupInput placeholder="비밀번호를 재입력해주세요" type="password" />
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
