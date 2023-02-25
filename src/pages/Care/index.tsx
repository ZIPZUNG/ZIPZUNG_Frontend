import { Header } from 'allFiles'
import React from 'react'
import * as S from './style'

const Care = () => {
	return (
		<S.CareWrap>
			<Header />
			<S.CareBoxWrap>
				<S.CareBoxTitle>집중 케어 신청하기</S.CareBoxTitle>
				<S.CareBoxQuestionWrap>
					<S.CareBoxQuestion>성명을 입력해주세요.</S.CareBoxQuestion>
					<S.CareBoxInput />
				</S.CareBoxQuestionWrap>
				<S.CareBoxQuestionWrap>
					<S.CareBoxQuestion>연락처(휴대폰 번호)를 입력해주세요.</S.CareBoxQuestion>
					<S.CareBoxInput />
				</S.CareBoxQuestionWrap>
				<S.CareBoxQuestionWrap>
					<S.CareBoxQuestion>연락 가능한 시간을 선택해주세요.</S.CareBoxQuestion>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="1">9:00 ~ 11:00</S.CareBoxLabel>
						<S.CareBoxOption type="checkbox" name="time" id="1" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="2">11:00 ~ 13:00</S.CareBoxLabel>
						<S.CareBoxOption type="checkbox" name="time" id="2" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="3">13:00 ~ 15:00</S.CareBoxLabel>
						<S.CareBoxOption type="checkbox" name="time" id="3" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="4">15:00 ~ 17:00</S.CareBoxLabel>
						<S.CareBoxOption type="checkbox" name="time" id="4" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="5">17:00 ~ 19:00</S.CareBoxLabel>
						<S.CareBoxOption type="checkbox" name="time" id="5" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="6">기타</S.CareBoxLabel>
						<S.CareBoxOption type="checkbox" name="time" id="6" />
					</S.CareBoxOptionWrap>
					<S.CareBoxInput />
				</S.CareBoxQuestionWrap>
				<S.CareBoxQuestionWrap>
					<S.CareBoxQuestion>전문가를 선택해주세요.</S.CareBoxQuestion>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="a">아파트</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="specialty" id="a" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="b">원룸/오피스텔</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="specialty" id="b" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="c">주택/빌라</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="specialty" id="c" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="d">사무실</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="specialty" id="d" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="e">상가</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="specialty" id="e" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="f">빌딩</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="specialty" id="f" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="g">공장/창고</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="specialty" id="g" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="h">지식산업센터</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="specialty" id="h" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="i">경매</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="specialty" id="i" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="j">재개발/재건축</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="specialty" id="j" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="k">병원/요양원</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="specialty" id="k" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="l">반려동물 전문 중개사</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="specialty" id="l" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="m">저소득층 전문 중개사</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="specialty" id="m" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="n">기타</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="specialty" id="n" />
					</S.CareBoxOptionWrap>
					<S.CareBoxInput />
				</S.CareBoxQuestionWrap>
				<S.CareBoxQuestionWrap>
					<S.CareBoxQuestion>유형을 선택해주세요.</S.CareBoxQuestion>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="a1">매매</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="type" id="a1" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="a2">전세</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="type" id="a2" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="a3">월세</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="type" id="a3" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="a4">기타</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="type" id="a4" />
					</S.CareBoxOptionWrap>
					<S.CareBoxInput />
				</S.CareBoxQuestionWrap>
				<S.CareBoxQuestionWrap>
					<S.CareBoxQuestion>보유 중이신 자본금을 선택해주세요.</S.CareBoxQuestion>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="b1">5,000만원 미만</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="money" id="b1" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="b2">1억 ~ 3억 미만</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="money" id="b2" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="b3">5억 미만</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="money" id="b3" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="b4">5억 이상</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="money" id="b4" />
					</S.CareBoxOptionWrap>
					<S.CareBoxOptionWrap>
						<S.CareBoxLabel htmlFor="a4">기타</S.CareBoxLabel>
						<S.CareBoxOption type="radio" name="type" id="a4" />
					</S.CareBoxOptionWrap>
					<S.CareBoxInput />
				</S.CareBoxQuestionWrap>
				<S.CareBoxQuestionWrap>
					<S.CareBoxQuestion>입주 가능일을 선택해주세요.</S.CareBoxQuestion>
					<S.CareBoxInput type="date" />
				</S.CareBoxQuestionWrap>
				<S.CareBoxQuestionWrap>
					<S.CareBoxQuestion>기타 요청 사항을 입력해주세요.</S.CareBoxQuestion>
					<S.CareBoxInput />
				</S.CareBoxQuestionWrap>
				<S.CareBoxQuestionWrap>
					<S.CareBoxSubmit>신청하기</S.CareBoxSubmit>
				</S.CareBoxQuestionWrap>
			</S.CareBoxWrap>
		</S.CareWrap>
	)
}

export default Care
