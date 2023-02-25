import { Header } from 'allFiles'
import React from 'react'
import * as S from './style'

const EstateEnroll = () => {
	return (
		<S.EstateWrap>
			<Header />
			<S.EstateBoxWrap>
				<S.EstateBoxTitle>집중 공인중개사 등록하기</S.EstateBoxTitle>
				<S.EstateBoxDescription>
					다음과 같은 제안 조건을 가지고 있습니다! <br />
					<br />
					1.공인중개사 자격증을 보유하신 분<br />
					2.자신의 전문 분야 및 프로 의식이 뚜렷하신 분<br />
					3.자신이 보유한 매물 또는 SNS가 잘 준비가 되신 분<br />
					4.고객 한 분 한 분에게 최선의 다하실 수 있는 분<br />
					5.업무 협력이 잘 되시는 분
				</S.EstateBoxDescription>
				<S.EstateBoxQuestionWrap>
					<S.EstateBoxQuestion>성명을 입력해주세요.</S.EstateBoxQuestion>
					<S.EstateBoxInput />
				</S.EstateBoxQuestionWrap>
				<S.EstateBoxQuestionWrap>
					<S.EstateBoxQuestion>연락처(휴대폰 번호)를 입력해주세요.</S.EstateBoxQuestion>
					<S.EstateBoxInput />
				</S.EstateBoxQuestionWrap>
				<S.EstateBoxQuestionWrap>
					<S.EstateBoxQuestion>현재 중계업에 활동 중이신가요?</S.EstateBoxQuestion>
					<S.EstateBoxOptionWrap>
						<S.EstateBoxLabel htmlFor="estate">네</S.EstateBoxLabel>
						<S.EstateBoxOption type="radio" name="job" id="estate" />
					</S.EstateBoxOptionWrap>
					<S.EstateBoxOptionWrap>
						<S.EstateBoxLabel htmlFor="fre_estate">중개사무소 창업 또는 취업 예정</S.EstateBoxLabel>
						<S.EstateBoxOption type="radio" name="job" id="fre_estate" />
					</S.EstateBoxOptionWrap>
				</S.EstateBoxQuestionWrap>
				<S.EstateBoxQuestionWrap>
					<S.EstateBoxQuestion>부동산 상호를 입력해주세요.</S.EstateBoxQuestion>
					<S.EstateBoxInput />
				</S.EstateBoxQuestionWrap>
				<S.EstateBoxQuestionWrap>
					<S.EstateBoxQuestion>부동산 사무소 소재지를 입력해주세요.</S.EstateBoxQuestion>
					<S.EstateBoxInput />
				</S.EstateBoxQuestionWrap>
				<S.EstateBoxQuestionWrap>
					<S.EstateBoxQuestion>현재 중개업 등록 구분은 어떻게 되시나요?</S.EstateBoxQuestion>
					<S.EstateBoxOptionWrap>
						<S.EstateBoxLabel htmlFor="estate_gaeup">개업 공인중개사</S.EstateBoxLabel>
						<S.EstateBoxOption type="radio" name="estate" id="estate_gaeup" />
					</S.EstateBoxOptionWrap>
					<S.EstateBoxOptionWrap>
						<S.EstateBoxLabel htmlFor="estate_sosok">소속 공인중개사</S.EstateBoxLabel>
						<S.EstateBoxOption type="radio" name="estate" id="estate_sosok" />
					</S.EstateBoxOptionWrap>
				</S.EstateBoxQuestionWrap>
				<S.EstateBoxQuestionWrap>
					<S.EstateBoxQuestion>자신있어하는 전문 중개 분야를 작성해주세요.</S.EstateBoxQuestion>
					<S.EstateBoxInput />
				</S.EstateBoxQuestionWrap>
				<S.EstateBoxQuestionWrap>
					<S.EstateBoxQuestion>업무와 관련있는 태그를 3개 작성해주세요.</S.EstateBoxQuestion>
					<S.EstateBoxInput value="#" />
					<S.EstateBoxInput value="#" />
					<S.EstateBoxInput value="#" />
				</S.EstateBoxQuestionWrap>
				<S.EstateBoxQuestionWrap>
					<S.EstateBoxQuestion>자기자신과 업무, 경력 등에 대해 소개해주세요.</S.EstateBoxQuestion>
					<div>
						<S.EstateBoxTextarea />
					</div>
				</S.EstateBoxQuestionWrap>
				<S.EstateBoxQuestionWrap>
					<S.EstateBoxQuestion>전문 분야 관련 사진을 업로드해주세요. (최대 5장)</S.EstateBoxQuestion>
					<S.EstateBoxFile type="file" />
					<S.EstateBoxFile type="file" />
					<S.EstateBoxFile type="file" />
					<S.EstateBoxFile type="file" />
					<S.EstateBoxFile type="file" />
				</S.EstateBoxQuestionWrap>
				<S.EstateBoxQuestionWrap>
					<S.EstateBoxQuestion>본인을 홍보할 SNS URL을 1가지만 입력해주세요.</S.EstateBoxQuestion>
					<S.EstateBoxInput />
				</S.EstateBoxQuestionWrap>
				<S.EstateBoxQuestionWrap>
					<S.EstateBoxSubmit>신청하기</S.EstateBoxSubmit>
				</S.EstateBoxQuestionWrap>
			</S.EstateBoxWrap>
		</S.EstateWrap>
	)
}

export default EstateEnroll
