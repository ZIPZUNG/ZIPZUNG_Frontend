import { Header } from 'allFiles'
import React from 'react'
import * as S from './style'

const Login = () => {
	const onClickLogin = () => {
		console.log({
			email,
			password,
		})
	}

	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')

	return (
		<>
			<Header />
			<S.LoginWrap>
				<S.LoginBox>
					<S.LoginLogoWrap>
						<S.LoginLogo src="/assets/logo.png" />
						<S.LoginText>ZIPZUNG</S.LoginText>
					</S.LoginLogoWrap>
					<S.LoginInput placeholder="이메일을 입력해주세요" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<S.LoginInput placeholder="비밀번호를 입력해주세요" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					<S.LoginButton onClick={onClickLogin}>회원가입하기</S.LoginButton>
					<S.NavigateLogin to="/signup">
						이미 계정이 있으신가요? <span>로그인하기</span>
					</S.NavigateLogin>
				</S.LoginBox>
			</S.LoginWrap>
		</>
	)
}

export default Login
