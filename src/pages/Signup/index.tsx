import { Header } from 'allFiles'
import React, { useEffect } from 'react'
import * as S from './style'

const Signup = () => {
	const [email, setEmail] = React.useState('')
	const [nickname, setNickname] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [repassword, setRepassword] = React.useState('')

	const [isMatchPW, setIsMatchPW] = React.useState(true)

	const [checked, setChecked] = React.useState<string[]>([])

	useEffect(() => {
		if (password !== repassword) {
			setIsMatchPW(false)
			console.log('asd')
		} else {
			setIsMatchPW(true)
		}
	}, [password, repassword])

	const onClickSignup = () => {
		if (checked.length === 4)
			console.log({
				email,
				nickname,
				password,
			})
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
					<S.SignupInput placeholder="이메일을 입력해주세요" value={email} onChange={(e) => setEmail(e.target.value)} />
					<S.SignupInput placeholder="닉네임을 입력해주세요" value={nickname} onChange={(e) => setNickname(e.target.value)} />
					<S.SignupInput placeholder="비밀번호를 입력해주세요" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					<S.SignupInput placeholder="비밀번호를 재입력해주세요" type="password" value={repassword} onChange={(e) => setRepassword(e.target.value)} />
					{!isMatchPW ? <S.isNotMatchPasswordText>비밀번호가 일치하지 않습니다.</S.isNotMatchPasswordText> : ''}
					<S.SignupCheck>
						<S.SignupCheckWrap>
							<S.SignupCheckbox
								type="checkbox"
								id="1"
								name="signup"
								value="집중 서비스 이용약관 동의"
								onChange={(e) => setChecked([...checked, e.target.value])}
							/>
							<S.SignupCheckLabel htmlFor="1">집중 서비스 이용약관 동의(필수)</S.SignupCheckLabel>
						</S.SignupCheckWrap>
						<S.SignupCheckWrap>
							<S.SignupCheckbox
								type="checkbox"
								id="2"
								name="signup"
								value="위치기반 서비스 이용약관 동의"
								onChange={(e) => setChecked([...checked, e.target.value])}
							/>
							<S.SignupCheckLabel htmlFor="2">위치기반 서비스 이용약관 동의(필수)</S.SignupCheckLabel>
						</S.SignupCheckWrap>
						<S.SignupCheckWrap>
							<S.SignupCheckbox
								type="checkbox"
								id="3"
								name="signup"
								value="개인정보처리방침 동의"
								onChange={(e) => setChecked([...checked, e.target.value])}
							/>
							<S.SignupCheckLabel htmlFor="3">개인정보처리방침 동의(필수)</S.SignupCheckLabel>
						</S.SignupCheckWrap>
						<S.SignupCheckWrap>
							<S.SignupCheckbox
								type="checkbox"
								id="4"
								name="signup"
								value="만 14세 이상"
								onChange={(e) => setChecked([...checked, e.target.value])}
							/>
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
