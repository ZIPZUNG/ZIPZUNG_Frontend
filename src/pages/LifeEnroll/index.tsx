import { Header } from 'allFiles'
import React from 'react'
import * as S from './style'

const LifeEnroll = () => {
	return (
		<S.LifeWrap>
			<Header />
			<S.LifeBoxWrap>
				<S.LifeBoxTitle>집중 생활 전문가 등록하기</S.LifeBoxTitle>
				<S.LifeBoxQuestionWrap>
					<S.LifeBoxQuestion>연락처(휴대폰 번호)를 입력해주세요.</S.LifeBoxQuestion>
					<S.LifeBoxInput />
				</S.LifeBoxQuestionWrap>
				<S.LifeBoxQuestionWrap>
					<S.LifeBoxQuestion>현재 업종이 무엇인가요?</S.LifeBoxQuestion>
					<S.LifeBoxOptionWrap>
						<S.LifeBoxLabel htmlFor="life">생활 소상공인</S.LifeBoxLabel>
						<S.LifeBoxOption type="radio" name="job" id="life" />
					</S.LifeBoxOptionWrap>
					<S.LifeBoxOptionWrap>
						<S.LifeBoxLabel htmlFor="tax">세무사</S.LifeBoxLabel>
						<S.LifeBoxOption type="radio" name="job" id="tax" />
					</S.LifeBoxOptionWrap>
					<S.LifeBoxOptionWrap>
						<S.LifeBoxLabel htmlFor="judice">법무사</S.LifeBoxLabel>
						<S.LifeBoxOption type="radio" name="job" id="judice" />
					</S.LifeBoxOptionWrap>
				</S.LifeBoxQuestionWrap>
				<S.LifeBoxQuestionWrap>
					<S.LifeBoxQuestion>
						소재지를 입력해주세요. <span>(ex) 서울시 서초구 서초동</span>
					</S.LifeBoxQuestion>
					<S.LifeBoxInput />
				</S.LifeBoxQuestionWrap>
				<S.LifeBoxQuestionWrap>
					<S.LifeBoxQuestion>
						전문 분야를 작성해주세요. <span>(ex) 이사, 사업자, 세금, 등기 등</span>
					</S.LifeBoxQuestion>
					<S.LifeBoxInput />
				</S.LifeBoxQuestionWrap>
				<S.LifeBoxQuestionWrap>
					<S.LifeBoxQuestion>업무와 관련있는 태그를 3개 작성해주세요.</S.LifeBoxQuestion>
					<S.LifeBoxInput value="#" />
					<S.LifeBoxInput value="#" />
					<S.LifeBoxInput value="#" />
				</S.LifeBoxQuestionWrap>
				<S.LifeBoxQuestionWrap>
					<S.LifeBoxQuestion>자기자신과 업무, 경력 등에 대해 소개해주세요.</S.LifeBoxQuestion>
					<div>
						<S.LifeBoxTextarea />
					</div>
				</S.LifeBoxQuestionWrap>
				<S.LifeBoxQuestionWrap>
					<S.LifeBoxQuestion>전문 분야 관련 사진을 업로드해주세요. (최대 5장)</S.LifeBoxQuestion>
					<S.LifeBoxFile type="file" />
					<S.LifeBoxFile type="file" />
					<S.LifeBoxFile type="file" />
					<S.LifeBoxFile type="file" />
					<S.LifeBoxFile type="file" />
				</S.LifeBoxQuestionWrap>
				<S.LifeBoxQuestionWrap>
					<S.LifeBoxQuestion>본인을 홍보할 SNS URL을 1가지만 입력해주세요.</S.LifeBoxQuestion>
					<S.LifeBoxInput />
				</S.LifeBoxQuestionWrap>
				<S.LifeBoxQuestionWrap>
					<S.LifeBoxSubmit>신청하기</S.LifeBoxSubmit>
				</S.LifeBoxQuestionWrap>
			</S.LifeBoxWrap>
		</S.LifeWrap>
	)
}

export default LifeEnroll
