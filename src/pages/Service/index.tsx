import { Header } from 'allFiles'
import React from 'react'
import * as S from './style'

const Service = () => {
	return (
		<S.ServiceWrap>
			<Header />
			<S.ServiceBoxWrap>
				<S.ServiceBoxTitle>집중 생활 서비스 신청하기</S.ServiceBoxTitle>
				<S.ServiceBoxQuestionWrap>
					<S.ServiceBoxQuestion>성명을 입력해주세요.</S.ServiceBoxQuestion>
					<S.ServiceBoxInput />
				</S.ServiceBoxQuestionWrap>
				<S.ServiceBoxQuestionWrap>
					<S.ServiceBoxQuestion>연락처(휴대폰 번호)를 입력해주세요.</S.ServiceBoxQuestion>
					<S.ServiceBoxInput />
				</S.ServiceBoxQuestionWrap>
				<S.ServiceBoxQuestionWrap>
					<S.ServiceBoxQuestion>필요하신 전문가 혹은 생활서비스를 선택해주세요.</S.ServiceBoxQuestion>
					<S.ServiceBoxOptionWrap>
						<S.ServiceBoxLabel htmlFor="tax">세무사</S.ServiceBoxLabel>
						<S.ServiceBoxOption type="checkbox" name="job" id="tax" />
					</S.ServiceBoxOptionWrap>
					<S.ServiceBoxOptionWrap>
						<S.ServiceBoxLabel htmlFor="judice">법무사</S.ServiceBoxLabel>
						<S.ServiceBoxOption type="checkbox" name="job" id="judice" />
					</S.ServiceBoxOptionWrap>
					<S.ServiceBoxOptionWrap>
						<S.ServiceBoxLabel htmlFor="manager">집중 매니저(전체 일정 관리)</S.ServiceBoxLabel>
						<S.ServiceBoxOption type="checkbox" name="job" id="manager" />
					</S.ServiceBoxOptionWrap>
					<S.ServiceBoxOptionWrap>
						<S.ServiceBoxLabel htmlFor="woman">여성 안심 공인중개사</S.ServiceBoxLabel>
						<S.ServiceBoxOption type="checkbox" name="job" id="woman" />
					</S.ServiceBoxOptionWrap>
					<S.ServiceBoxOptionWrap>
						<S.ServiceBoxLabel htmlFor="move">이사</S.ServiceBoxLabel>
						<S.ServiceBoxOption type="checkbox" name="job" id="move" />
					</S.ServiceBoxOptionWrap>
					<S.ServiceBoxOptionWrap>
						<S.ServiceBoxLabel htmlFor="cleaning">청소</S.ServiceBoxLabel>
						<S.ServiceBoxOption type="checkbox" name="job" id="cleaning" />
					</S.ServiceBoxOptionWrap>
					<S.ServiceBoxOptionWrap>
						<S.ServiceBoxLabel htmlFor="interior">인테리어</S.ServiceBoxLabel>
						<S.ServiceBoxOption type="checkbox" name="job" id="interior" />
					</S.ServiceBoxOptionWrap>
					<S.ServiceBoxOptionWrap>
						<S.ServiceBoxLabel htmlFor="home_appliances">폐가전</S.ServiceBoxLabel>
						<S.ServiceBoxOption type="checkbox" name="job" id="home_appliances" />
					</S.ServiceBoxOptionWrap>
				</S.ServiceBoxQuestionWrap>
				<S.ServiceBoxQuestionWrap>
					<S.ServiceBoxQuestion>기타 요청 사항을 입력해주세요.</S.ServiceBoxQuestion>
					<S.ServiceBoxInput />
				</S.ServiceBoxQuestionWrap>
				<S.ServiceBoxQuestionWrap>
					<S.ServiceBoxSubmit>신청하기</S.ServiceBoxSubmit>
				</S.ServiceBoxQuestionWrap>
			</S.ServiceBoxWrap>
		</S.ServiceWrap>
	)
}

export default Service
