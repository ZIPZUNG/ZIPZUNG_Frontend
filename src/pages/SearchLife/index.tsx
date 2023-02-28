import { Header, SearchEngine } from 'allFiles'
import React from 'react'
import * as S from './style'

const SearchLife = () => {
	return (
		<S.SearchWrap>
			<Header />
			<SearchEngine type="life" />
			<S.SearchResultWrap>
				{[1, 1, 1, 1, 1, 1, 1].map((_, index) => (
					<S.SearchResult to="/detail" key={index}>
						<S.SearchProfileImageWrap>
							<S.SearchProfileImage src="https://bssm.kro.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile_default.99e93808.png&w=128&q=75" />
							<S.SearchProfileInfo>
								전문분야 | <span>{'청소'}</span>
							</S.SearchProfileInfo>
							<S.SearchProfileInfo>
								소속 | <span>{'OO클리닝'}</span>
							</S.SearchProfileInfo>
							<S.SearchProfileInfo>
								응답속도 | <span>매우빠름</span>
							</S.SearchProfileInfo>
							<S.SearchProfileInfo>평점 | {4.8}/5.0</S.SearchProfileInfo>
						</S.SearchProfileImageWrap>
						<S.SearchProfileWrap>
							<S.ProfileName>집중 청소 클린</S.ProfileName>
							<S.ProfileDescription>안녕하세요 집중 청소 클린입니다. OO시 OO구에서 4년간 일해왔으며 그동안...</S.ProfileDescription>
							<S.ProfileLine />
							<S.ProfileReviewWrap>
								<S.ProfileReviewImg src="/assets/test_house.png" />
								<S.ProfileReviewImg src="/assets/test_house2.png" />
								<S.ProfileReviewImg src="/assets/test_house3.png" />
							</S.ProfileReviewWrap>
						</S.SearchProfileWrap>
					</S.SearchResult>
				))}
			</S.SearchResultWrap>
		</S.SearchWrap>
	)
}

export default SearchLife
