import { Header } from 'allFiles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'

const Care = () => {
	const navigate = useNavigate()
	const onClickCare = () => {
		navigate('/')
	}

	return (
		<>
			<Header />
			<S.CareWrap>
				<S.CareBox>
					<S.CareLogoWrap>
						<S.CareLogo src="/assets/logo.png" />
						<S.CareText>집중케어 등록하기</S.CareText>
					</S.CareLogoWrap>
					<S.CareDescription>
						※ 공인중개사 또는 원하시는 서비스를 요청하시면 집중 매니저가 관리 및 제안 드립니다. <br />※ 현재 베타서비스 기간 중이며 서비스 지원이
						불가한 지역이 생길 수 있으니 참고해 주세요.
					</S.CareDescription>
					<S.CareInputWrap>
						<S.CareInputTitle>성명을 입력해주세요</S.CareInputTitle>
						<S.CareInput placeholder="홍길동" />
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle>인증된 연락처를 입력해주세요</S.CareInputTitle>
						<S.CareInput placeholder="010-1234-5678" />
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle style={{ marginBottom: '4px' }}>연락 가능한 시간을 선택해주세요.</S.CareInputTitle>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" id="1" name="care" />
							<S.CareCheckLabel htmlFor="1">9:00 ~ 11:00</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" id="2" name="care" />
							<S.CareCheckLabel htmlFor="2">11:00 ~ 13:00</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" id="3" name="care" />
							<S.CareCheckLabel htmlFor="3">13:00 ~ 15:00</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" id="4" name="care" />
							<S.CareCheckLabel htmlFor="4">15:00 ~ 17:00</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" id="5" name="care" />
							<S.CareCheckLabel htmlFor="5">17:00 ~ 19:00</S.CareCheckLabel>
						</S.CareCheckWrap>
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle>전문가를 선택해주세요.</S.CareInputTitle>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="specialty" id="m" />
							<S.CareCheckLabel htmlFor="m">필요 없음</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="specialty" id="a" />
							<S.CareCheckLabel htmlFor="a">아파트</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="specialty" id="b" />
							<S.CareCheckLabel htmlFor="b">원룸/오피스텔</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="specialty" id="c" />
							<S.CareCheckLabel htmlFor="c">주택/빌라</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="specialty" id="d" />
							<S.CareCheckLabel htmlFor="d">사무실</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="specialty" id="e" />
							<S.CareCheckLabel htmlFor="e">상가</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="specialty" id="f" />
							<S.CareCheckLabel htmlFor="f">빌딩</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="specialty" id="g" />
							<S.CareCheckLabel htmlFor="g">공장/창고</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="specialty" id="h" />
							<S.CareCheckLabel htmlFor="h">지식산업센터</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="specialty" id="i" />
							<S.CareCheckLabel htmlFor="i">경매</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="specialty" id="j" />
							<S.CareCheckLabel htmlFor="j">재개발/재건축</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="specialty" id="k" />
							<S.CareCheckLabel htmlFor="k">병원/요양원</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="specialty" id="l" />
							<S.CareCheckLabel htmlFor="l">반려동물 전문 중개사</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="specialty" id="m" />
							<S.CareCheckLabel htmlFor="m">저소득층 전문 중개사</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="specialty" id="n" />
							<S.CareCheckLabel htmlFor="n">기타</S.CareCheckLabel>
							<S.CareInputEtc />
						</S.CareCheckWrap>
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle>유형을 선택해주세요.</S.CareInputTitle>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="type" id="a1" />
							<S.CareCheckLabel htmlFor="a1">매매</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="type" id="a2" />
							<S.CareCheckLabel htmlFor="a2">전세</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="type" id="a3" />
							<S.CareCheckLabel htmlFor="a3">월세</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="type" id="a4" />
							<S.CareCheckLabel htmlFor="a4">기타</S.CareCheckLabel>
							<S.CareInputEtc />
						</S.CareCheckWrap>
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle>보유 중이신 자본금을 선택해주세요.</S.CareInputTitle>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="money" id="b1" />
							<S.CareCheckLabel htmlFor="b1">5,000만원 미만</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="money" id="b2" />
							<S.CareCheckLabel htmlFor="b2">1억 ~ 3억 미만</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="money" id="b3" />
							<S.CareCheckLabel htmlFor="b3">5억 미만</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="money" id="b4" />
							<S.CareCheckLabel htmlFor="b4">5억 이상</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="money" id="a4" />
							<S.CareCheckLabel htmlFor="a4">기타</S.CareCheckLabel>
							<S.CareInputEtc />
						</S.CareCheckWrap>
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle>입주 가능일을 선택해주세요.</S.CareInputTitle>
						<S.CareInput type="date" />
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle>생활 서비스를 신청하시겠습니까?</S.CareInputTitle>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" id="9a" name="service" />
							<S.CareCheckLabel htmlFor="9a">네</S.CareCheckLabel>
						</S.CareCheckWrap>
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle>필요하신 서비스를 선택해주세요.</S.CareInputTitle>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" name="needService" id="10a" />
							<S.CareCheckLabel htmlFor="10a">이사</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" name="needService" id="10b" />
							<S.CareCheckLabel htmlFor="10b">청소</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" name="needService" id="10c" />
							<S.CareCheckLabel htmlFor="10c">인테리어</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" name="needService" id="10d" />
							<S.CareCheckLabel htmlFor="10d">폐가전</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" name="needService" id="10e" />
							<S.CareCheckLabel htmlFor="10e">대출</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" name="needService" id="10f" />
							<S.CareCheckLabel htmlFor="10f">세무사</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" name="needService" id="10g" />
							<S.CareCheckLabel htmlFor="10g">법무사</S.CareCheckLabel>
						</S.CareCheckWrap>
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle>기타 요청 사항이 있나요?</S.CareInputTitle>
						<S.CareInput placeholder="" />
					</S.CareInputWrap>
					<S.CareDescriptionWrap>
						<S.CareDescription>
							[개인정보 수집 및 이용에 대한 안내] <br />
							※ 개인정보 수집 및 이용 개인정보 수집 주체 : 집중공인중개사사무소
							<br />
							개인정보 수집항목 : 성함, 연락처, 이메일주소
							<br />
							개인정보 수집 및 이용목적 : 집중공인중개사 서비스 신청자 식별과 중개
							<br />
							또는 생활 서비스 정보 및 관련 모든 서비스 제안 안내
							<br />
							개인정보 보유 및 이용 기간 : 수집일로부터 3년 (고객 동의 철회 시 지체 없이 파기) <br />※ 개인정보 취급 위탁 개인정보 취급 위탁을 받는 자
							: 집중공인중개사사무소
							<br />
							개인정보 취급 위탁을 하는 업무의 내용 : 고객 정보 저장 및 서버 관리 <br />※ 아래 동의 버튼 체크 시, 본인은 개인정보 수집 및 이용에
							동의합니다. <br />
							※ 파기 사유 발생 및 철회 요청이 들어온 개인정보일 경우, <br />
							회사의 개인정보 보호책임자의 승인을 받아 개인정보를 지체없이 파기합니다. <br />※ 상기 동의를 거부할 권리가 있으나, 수집 및 이용에
							동의하지
							<br /> 않을 경우 컨설팅 및 케어 서비스 관련 모든 서비스는 불가능합니다.
						</S.CareDescription>
					</S.CareDescriptionWrap>
					<S.CareButton onClick={onClickCare}>회원가입하기</S.CareButton>
					<S.NavigateCare to="/login">
						이미 계정이 있으신가요? <span>로그인하기</span>
					</S.NavigateCare>
				</S.CareBox>
			</S.CareWrap>
		</>
	)
}

export default Care
