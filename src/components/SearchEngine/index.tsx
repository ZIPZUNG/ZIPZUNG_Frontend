import React from 'react'
import * as S from './style'

interface SearchEngineType {
	type: string
}

const SearchEngine = ({ type }: SearchEngineType) => {
	return (
		<S.SearchEngineWrap>
			<S.SearchEngineBox>
				<S.SearchEngine>
					<S.SearchEngineInput placeholder="검색어를 입력해주세요" />
					<S.SearchButton>검색하기</S.SearchButton>
				</S.SearchEngine>
				{type === 'estate' ? (
					<>
						<S.SearchServiceTitle>분야별 중개사 찾기</S.SearchServiceTitle>
						<S.SearchOptionWrap>
							<S.SearchOption>아파트</S.SearchOption>
							<S.SearchOption>주택</S.SearchOption>
							<S.SearchOption>원룸</S.SearchOption>
							<S.SearchOption>빌라</S.SearchOption>
							<S.SearchOption>다세대/다가구</S.SearchOption>
							<S.SearchOption>상가</S.SearchOption>
							<S.SearchOption>사무실</S.SearchOption>
							<S.SearchOption>소상공인</S.SearchOption>
							<S.SearchOption>빌딩</S.SearchOption>
						</S.SearchOptionWrap>
						<S.SearchOptionWrap>
							<S.SearchOption>토지</S.SearchOption>
							<S.SearchOption>재건축/재개발</S.SearchOption>
							<S.SearchOption>공장</S.SearchOption>
							<S.SearchOption>창고</S.SearchOption>
							<S.SearchOption>경매</S.SearchOption>
							<S.SearchOption>요양원</S.SearchOption>
							<S.SearchOption>모텔</S.SearchOption>
						</S.SearchOptionWrap>
					</>
				) : (
					<>
						<S.SearchServiceTitle>생활 서비스 찾기</S.SearchServiceTitle>
						<S.SearchOptionWrap>
							<S.SearchOption>이사</S.SearchOption>
							<S.SearchOption>청소</S.SearchOption>
							<S.SearchOption>인테리어</S.SearchOption>
							<S.SearchOption>폐가전</S.SearchOption>
							<S.SearchOption>세무사</S.SearchOption>
							<S.SearchOption>법무사</S.SearchOption>
						</S.SearchOptionWrap>
					</>
				)}
			</S.SearchEngineBox>
		</S.SearchEngineWrap>
	)
}

export default SearchEngine
