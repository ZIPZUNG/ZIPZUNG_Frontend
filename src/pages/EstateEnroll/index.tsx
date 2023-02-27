import { Header } from 'allFiles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'

const Estate = () => {
	const navigate = useNavigate()
	const onClickEstate = () => {
		navigate('/')
	}

	return (
		<>
			<Header />
			<S.EstateWrap>
				<S.EstateBox>
					<S.EstateLogoWrap>
						<S.EstateLogo src="/assets/logo.png" />
						<S.EstateText>공인중개사 등록하기</S.EstateText>
					</S.EstateLogoWrap>
					<S.EstateDescription>
						※ 관련법에 따라 개업공인중개사 외의 매물 등록 및 홍보가 제한됩니다.
						<br />※ 소속 공인중개사는 등록 후 대표 명의로 매물 등록이 가능합니다.
					</S.EstateDescription>
					<S.EstateInputWrap>
						<S.EstateInputTitle>성명을 입력해주세요</S.EstateInputTitle>
						<S.EstateInput placeholder="홍길동" />
					</S.EstateInputWrap>
					<S.EstateInputWrap>
						<S.EstateInputTitle>인증된 연락처를 입력해주세요</S.EstateInputTitle>
						<S.EstateInput placeholder="010-1234-5678" />
					</S.EstateInputWrap>
					<S.EstateInputWrap>
						<S.EstateInputTitle style={{ marginBottom: '4px' }}>공인중개사의 분류는</S.EstateInputTitle>
						<S.EstateCheckWrap>
							<S.EstateCheckbox type="radio" id="1" name="estate" />
							<S.EstateCheckLabel htmlFor="1">개업 공인중개사입니다.</S.EstateCheckLabel>
						</S.EstateCheckWrap>
						<S.EstateCheckWrap>
							<S.EstateCheckbox type="radio" id="2" name="estate" />
							<S.EstateCheckLabel htmlFor="2">소속 공인중개사입니다.</S.EstateCheckLabel>
						</S.EstateCheckWrap>
					</S.EstateInputWrap>
					<S.EstateInputWrap>
						<S.EstateInputTitle>자신있는 전문분야가 무엇인가요?</S.EstateInputTitle>
						<S.EstateInput placeholder="아파트, 사무실, 경매, 요양원" />
					</S.EstateInputWrap>
					<S.EstateInputWrap>
						<S.EstateInputTitle>업무와 관련된 해시태그를 3개 입력해주세요.</S.EstateInputTitle>
						<div style={{ display: 'flex' }}>
							<S.HashTagInput placeholder="#" />
							<S.HashTagInput placeholder="#" />
							<S.HashTagInput placeholder="#" />
						</div>
					</S.EstateInputWrap>
					<S.EstateInputWrap>
						<S.EstateInputTitle>자신을 한 줄로 소개한다면?</S.EstateInputTitle>
						<S.EstateInput placeholder="" />
					</S.EstateInputWrap>
					<S.EstateInputWrap>
						<S.EstateInputTitle>자신의 경력이나 업무에 대해 소개해주세요.</S.EstateInputTitle>
						<S.EstateTextarea placeholder="" />
					</S.EstateInputWrap>
					<S.EstateInputWrap>
						<S.EstateInputTitle>분야와 관련된 사진을 최대 3장까지 등록해주세요.</S.EstateInputTitle>
						<S.EstateInputFile type="file" />
						<S.EstateInputFile type="file" />
						<S.EstateInputFile type="file" />
					</S.EstateInputWrap>
					<S.EstateInputWrap>
						<S.EstateInputTitle>홍보용 SNS가 있다면 URL를 입력해주세요.</S.EstateInputTitle>
						<S.EstateInput placeholder="https://" />
					</S.EstateInputWrap>
					<S.EstateInputWrap>
						<S.EstateInputTitle>본인 또는 소속 사무실에 대한 정보를 입력해주세요.</S.EstateInputTitle>
						<S.EstateInput placeholder="중개 등록 번호" />
						<S.EstateInput placeholder="상호명" />
						<S.EstateInput placeholder="소재지" />
						<S.EstateInput placeholder="상세주소" />
						<S.EstateInput placeholder="대표자 성명" />
						<S.EstateInput placeholder="대표자 연락처" />
					</S.EstateInputWrap>
					<S.EstateButton onClick={onClickEstate}>회원가입하기</S.EstateButton>
					<S.NavigateEstate to="/login">
						이미 계정이 있으신가요? <span>로그인하기</span>
					</S.NavigateEstate>
				</S.EstateBox>
			</S.EstateWrap>
		</>
	)
}

export default Estate
