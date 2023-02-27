import { Header } from 'allFiles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'

const Life = () => {
	const navigate = useNavigate()
	const onClickLife = () => {
		navigate('/')
	}

	return (
		<>
			<Header />
			<S.LifeWrap>
				<S.LifeBox>
					<S.LifeLogoWrap>
						<S.LifeLogo src="/assets/logo.png" />
						<S.LifeText>생활전문가 등록하기</S.LifeText>
					</S.LifeLogoWrap>
					<S.LifeInputWrap>
						<S.LifeInputTitle>성명을 입력해주세요</S.LifeInputTitle>
						<S.LifeInput placeholder="홍길동" />
					</S.LifeInputWrap>
					<S.LifeInputWrap>
						<S.LifeInputTitle>인증된 연락처를 입력해주세요</S.LifeInputTitle>
						<S.LifeInput placeholder="010-1234-5678" />
					</S.LifeInputWrap>
					<S.LifeInputWrap>
						<S.LifeInputTitle style={{ marginBottom: '4px' }}>전문 분야는</S.LifeInputTitle>
						<S.LifeCheckWrap>
							<S.LifeCheckbox type="radio" id="1" name="life" />
							<S.LifeCheckLabel htmlFor="1">생활 소상공인입니다.</S.LifeCheckLabel>
						</S.LifeCheckWrap>
						<S.LifeCheckWrap>
							<S.LifeCheckbox type="radio" id="2" name="life" />
							<S.LifeCheckLabel htmlFor="2">세무사입니다.</S.LifeCheckLabel>
						</S.LifeCheckWrap>
						<S.LifeCheckWrap>
							<S.LifeCheckbox type="radio" id="3" name="life" />
							<S.LifeCheckLabel htmlFor="3">법무사입니다.</S.LifeCheckLabel>
						</S.LifeCheckWrap>
					</S.LifeInputWrap>
					<S.LifeInputWrap>
						<S.LifeInputTitle>전문분야 또는 대표서비스가 무엇인가요?</S.LifeInputTitle>
						<S.LifeInput placeholder="이사, 청소, 세금, 등기" />
					</S.LifeInputWrap>
					<S.LifeInputWrap>
						<S.LifeInputTitle>업무와 관련된 해시태그를 3개 입력해주세요.</S.LifeInputTitle>
						<div style={{ display: 'flex' }}>
							<S.HashTagInput placeholder="#" />
							<S.HashTagInput placeholder="#" />
							<S.HashTagInput placeholder="#" />
						</div>
					</S.LifeInputWrap>
					<S.LifeInputWrap>
						<S.LifeInputTitle>자신을 한 줄로 소개한다면?</S.LifeInputTitle>
						<S.LifeInput placeholder="" />
					</S.LifeInputWrap>
					<S.LifeInputWrap>
						<S.LifeInputTitle>자신의 경력이나 업무에 대해 소개해주세요.</S.LifeInputTitle>
						<S.LifeTextarea placeholder="" />
					</S.LifeInputWrap>
					<S.LifeInputWrap>
						<S.LifeInputTitle>분야와 관련된 사진을 최대 3장까지 등록해주세요.</S.LifeInputTitle>
						<S.LifeInputFile type="file" />
						<S.LifeInputFile type="file" />
						<S.LifeInputFile type="file" />
					</S.LifeInputWrap>
					<S.LifeInputWrap>
						<S.LifeInputTitle>홍보용 SNS가 있다면 URL를 입력해주세요.</S.LifeInputTitle>
						<S.LifeInput placeholder="https://" />
					</S.LifeInputWrap>
					<S.LifeInputWrap>
						<S.LifeInputTitle>사업자등록증 사진</S.LifeInputTitle>
						<S.LifeDescription>
							※ 제출한 사진은 검수용으로 사용됩니다. <br />※ 상호 등 정보를 파악할수 있는 사진을 첨부해주세요.
						</S.LifeDescription>
						<S.LifeInputFile type="file" />
					</S.LifeInputWrap>
					<S.LifeInputWrap>
						<S.LifeInputTitle>자격증 및 기타 서류 등록</S.LifeInputTitle>
						<S.LifeDescription>
							※ 개인 및 민감한 정보를 가린 후 등록해야 하며, <br />
							허위정보에 대한 모든 책임은 본인에게 있습니다.
						</S.LifeDescription>
						<S.LifeInputFile type="file" />
					</S.LifeInputWrap>
					<S.LifeInputWrap>
						<S.LifeInputTitle>사업자 정보에 대해 입력해주세요.</S.LifeInputTitle>
						<S.LifeInput placeholder="사업자 등록 번호" />
						<S.LifeInput placeholder="상호명" />
						<S.LifeInput placeholder="소재지" />
						<S.LifeInput placeholder="상세주소" />
					</S.LifeInputWrap>
					<S.LifeButton onClick={onClickLife}>회원가입하기</S.LifeButton>
					<S.NavigateLife to="/login">
						이미 계정이 있으신가요? <span>로그인하기</span>
					</S.NavigateLife>
				</S.LifeBox>
			</S.LifeWrap>
		</>
	)
}

export default Life
