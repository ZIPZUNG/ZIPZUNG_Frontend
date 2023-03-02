import { Header } from 'allFiles'
import React from 'react'
import * as S from './style'

interface reducerAction {
	name: string
	value: string
}

function reducer(state: any, action: reducerAction) {
	return {
		...state,
		[action.name]: action.value,
	}
}

const Care = () => {
	const [state, dispatch] = React.useReducer(reducer, {
		name: '',
		contact: '',
		movingInDate: '',
		expert: '',
		category: '',
		capital: '',
		etcReq: '',
	})
	const { name, contact, movingInDate, expert, category, capital, etcReq } = state

	const [contactTime, setContactTime] = React.useState<string[]>([])
	const [service, setService] = React.useState<string[]>([])
	const [isOK, setIsOK] = React.useState(false)

	const [expertEtc, setExpertEtc] = React.useState('')
	const [categoryEtc, setCategoryEtc] = React.useState('')
	const [capitalEtc, setCapitalEtc] = React.useState('')

	const onChangeReducer = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(e.target)
	}

	const onClickSubmitForm = () => {
		if (!name) {
			alert('이름을 입력해주세요!')
			return
		}
		if (!contact) {
			alert('연락처를 입력해주세요!')
			return
		}
		if (!movingInDate) {
			alert('입주 가능일을 선택해주세요!')
			return
		}
		if (!expert) {
			alert('전문가 항목을 확인해주세요!')
			return
		}
		if (!category) {
			alert('유형 항목을 확인해주세요!')
			return
		}
		if (!capital) {
			alert('자본금 항목을 확인해주세요!')
			return
		}
		if (!contactTime) {
			alert('연락 가능 시간 항목을 확인해주세요!')
			return
		}
		if (!service) {
			alert('서비스 항목을 확인해주세요!')
			return
		}
		if (expert === '기타' && !expertEtc.length) {
			alert('기타 항목의 전문가를 입력란에 기재해주세요!')
			return
		}
		if (category === '기타' && !categoryEtc.length) {
			alert('기타 항목의 유형을 입력란에 기재해주세요!')
			return
		}
		if (capital === '기타' && !capitalEtc.length) {
			alert('기타 항목의 자본금을 입력란에 기재해주세요!')
			return
		}
		if (!isOK) {
			alert('생활 서비스 신청에 동의하지 않으셨습니다. 항목을 다시 확인해주세요.')
			return
		}

		console.log({
			name: name,
			contact: contact,
			movingInDate: movingInDate,
			expert: expert,
			category: category,
			capital: capital,
			etcReq: etcReq,
			contactTime: contactTime,
			service: service,
		})
		// api
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
						<S.CareInput placeholder="홍길동" name="name" value={name} onChange={onChangeReducer} />
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle>인증된 연락처를 입력해주세요</S.CareInputTitle>
						<S.CareInput placeholder="010-1234-5678" name="contact" value={contact} onChange={onChangeReducer} />
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle style={{ marginBottom: '4px' }}>연락 가능한 시간을 선택해주세요.</S.CareInputTitle>
						<S.CareCheckWrap>
							<S.CareCheckbox
								type="checkbox"
								value="9:00 ~ 11:00"
								id="1"
								name="contactTime"
								onChange={(e) => setContactTime([...contactTime, e.target.value])}
							/>
							<S.CareCheckLabel htmlFor="1">9:00 ~ 11:00</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox
								type="checkbox"
								value="11:00 ~ 13:00"
								id="2"
								name="contactTime"
								onChange={(e) => setContactTime([...contactTime, e.target.value])}
							/>
							<S.CareCheckLabel htmlFor="2">11:00 ~ 13:00</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox
								type="checkbox"
								value="13:00 ~ 15:00"
								id="3"
								name="contactTime"
								onChange={(e) => setContactTime([...contactTime, e.target.value])}
							/>
							<S.CareCheckLabel htmlFor="3">13:00 ~ 15:00</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox
								type="checkbox"
								value="15:00 ~ 17:00"
								id="4"
								name="contactTime"
								onChange={(e) => setContactTime([...contactTime, e.target.value])}
							/>
							<S.CareCheckLabel htmlFor="4">15:00 ~ 17:00</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox
								type="checkbox"
								value="17:00 ~ 19:00"
								id="5"
								name="contactTime"
								onChange={(e) => setContactTime([...contactTime, e.target.value])}
							/>
							<S.CareCheckLabel htmlFor="5">17:00 ~ 19:00</S.CareCheckLabel>
						</S.CareCheckWrap>
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle>전문가를 선택해주세요.</S.CareInputTitle>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="expert" value="필요 없음" onChange={onChangeReducer} id="m" />
							<S.CareCheckLabel htmlFor="m">필요 없음</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="expert" value="아파트" onChange={onChangeReducer} id="a" />
							<S.CareCheckLabel htmlFor="a">아파트</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="expert" value="원룸/오피스텔" onChange={onChangeReducer} id="b" />
							<S.CareCheckLabel htmlFor="b">원룸/오피스텔</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="expert" value="주택/빌라" onChange={onChangeReducer} id="c" />
							<S.CareCheckLabel htmlFor="c">주택/빌라</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="expert" value="사무실" onChange={onChangeReducer} id="d" />
							<S.CareCheckLabel htmlFor="d">사무실</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="expert" value="상가" onChange={onChangeReducer} id="e" />
							<S.CareCheckLabel htmlFor="e">상가</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="expert" value="빌딩" onChange={onChangeReducer} id="f" />
							<S.CareCheckLabel htmlFor="f">빌딩</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="expert" value="공장/창고" onChange={onChangeReducer} id="g" />
							<S.CareCheckLabel htmlFor="g">공장/창고</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="expert" value="지식산업센터" onChange={onChangeReducer} id="h" />
							<S.CareCheckLabel htmlFor="h">지식산업센터</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="expert" value="경매" onChange={onChangeReducer} id="i" />
							<S.CareCheckLabel htmlFor="i">경매</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="expert" value="재개발/재건축" onChange={onChangeReducer} id="j" />
							<S.CareCheckLabel htmlFor="j">재개발/재건축</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="expert" value="병원/요양원" onChange={onChangeReducer} id="k" />
							<S.CareCheckLabel htmlFor="k">병원/요양원</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="expert" value="반려동물 전문 중개사" onChange={onChangeReducer} id="l" />
							<S.CareCheckLabel htmlFor="l">반려동물 전문 중개사</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="expert" value="저소득층 전문 중개사" onChange={onChangeReducer} id="m" />
							<S.CareCheckLabel htmlFor="m">저소득층 전문 중개사</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="expert" value="기타" onChange={onChangeReducer} id="n" />
							<S.CareCheckLabel htmlFor="n">기타</S.CareCheckLabel>
							<S.CareInputEtc value={expertEtc} onChange={(e) => setExpertEtc(e.target.value)} disabled={expert === '기타' ? false : true} />
						</S.CareCheckWrap>
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle>유형을 선택해주세요.</S.CareInputTitle>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="category" value="매매" onChange={onChangeReducer} id="a1" />
							<S.CareCheckLabel htmlFor="a1">매매</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="category" value="전세" onChange={onChangeReducer} id="a2" />
							<S.CareCheckLabel htmlFor="a2">전세</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="category" value="월세" onChange={onChangeReducer} id="a3" />
							<S.CareCheckLabel htmlFor="a3">월세</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="category" value="기타" onChange={onChangeReducer} id="a4" />
							<S.CareCheckLabel htmlFor="a4">기타</S.CareCheckLabel>
							<S.CareInputEtc value={categoryEtc} onChange={(e) => setCategoryEtc(e.target.value)} disabled={category === '기타' ? false : true} />
						</S.CareCheckWrap>
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle>보유 중이신 자본금을 선택해주세요.</S.CareInputTitle>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="capital" value="5,000만원 미만" onChange={onChangeReducer} id="b1" />
							<S.CareCheckLabel htmlFor="b1">5,000만원 미만</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="capital" value="1억 ~ 3억 미만" onChange={onChangeReducer} id="b2" />
							<S.CareCheckLabel htmlFor="b2">1억 ~ 3억 미만</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="capital" value="5억 미만" onChange={onChangeReducer} id="b3" />
							<S.CareCheckLabel htmlFor="b3">5억 미만</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="capital" value="5억 이상" onChange={onChangeReducer} id="b4" />
							<S.CareCheckLabel htmlFor="b4">5억 이상</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" name="capital" value="기타" onChange={onChangeReducer} id="a4" />
							<S.CareCheckLabel htmlFor="a4">기타</S.CareCheckLabel>
							<S.CareInputEtc value={capitalEtc} onChange={(e) => setCapitalEtc(e.target.value)} disabled={capital === '기타' ? false : true} />
						</S.CareCheckWrap>
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle>입주 가능일을 선택해주세요.</S.CareInputTitle>
						<S.CareInput type="date" onChange={onChangeReducer} name="movingInDate" value={movingInDate} />
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle>생활 서비스를 신청하시겠습니까?</S.CareInputTitle>
						<S.CareCheckWrap>
							<S.CareCheckbox type="radio" id="9a" name="isOK" onClick={() => setIsOK(true)} />
							<S.CareCheckLabel htmlFor="9a">네</S.CareCheckLabel>
						</S.CareCheckWrap>
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle>필요하신 서비스를 선택해주세요.</S.CareInputTitle>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" name="service" value="이사" onChange={(e) => setService([...service, e.target.value])} id="10a" />
							<S.CareCheckLabel htmlFor="10a">이사</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" name="service" value="청소" onChange={(e) => setService([...service, e.target.value])} id="10b" />
							<S.CareCheckLabel htmlFor="10b">청소</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" name="service" value="인테리어" onChange={(e) => setService([...service, e.target.value])} id="10c" />
							<S.CareCheckLabel htmlFor="10c">인테리어</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" name="service" value="폐가전" onChange={(e) => setService([...service, e.target.value])} id="10d" />
							<S.CareCheckLabel htmlFor="10d">폐가전</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" name="service" value="대출" onChange={(e) => setService([...service, e.target.value])} id="10e" />
							<S.CareCheckLabel htmlFor="10e">대출</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" name="service" value="세무사" onChange={(e) => setService([...service, e.target.value])} id="10f" />
							<S.CareCheckLabel htmlFor="10f">세무사</S.CareCheckLabel>
						</S.CareCheckWrap>
						<S.CareCheckWrap>
							<S.CareCheckbox type="checkbox" name="service" value="법무사" onChange={(e) => setService([...service, e.target.value])} id="10g" />
							<S.CareCheckLabel htmlFor="10g">법무사</S.CareCheckLabel>
						</S.CareCheckWrap>
					</S.CareInputWrap>
					<S.CareInputWrap>
						<S.CareInputTitle>기타 요청 사항이 있나요?</S.CareInputTitle>
						<S.CareInput placeholder="" name="etcReq" value={etcReq} onChange={onChangeReducer} />
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
					<S.CareButton onClick={onClickSubmitForm}>신청하기</S.CareButton>
				</S.CareBox>
			</S.CareWrap>
		</>
	)
}

export default Care
