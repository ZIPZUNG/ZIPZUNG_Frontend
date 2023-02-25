import { Header } from 'allFiles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'

const Login = () => {
	const navigate = useNavigate()
	const onClickLogin = () => {
		navigate('/')
	}

	return (
		<>
			<Header />
			<S.LoginWrap>
				<S.LoginBox>
					<S.LoginLogo src="/assets/logo.png" />
					<S.LoginInput placeholder="이메일을 입력해주세요" />
					<S.LoginInput placeholder="비밀번호를 입력해주세요" type="password" />
					<S.LoginButton onClick={onClickLogin}>로그인하기</S.LoginButton>
					<S.NavigateSignup to="/signup">
						계정이 없으신가요? <span>회원가입하기</span>
					</S.NavigateSignup>
				</S.LoginBox>
			</S.LoginWrap>
		</>
	)
}

export default Login
