import { Header } from 'allFiles'
import React from 'react'
import * as S from './style'

const Search = () => {
	return (
		<S.SearchWrap>
			<Header />
			<S.SearchResultWrap>
				{[1, 1, 1, 1, 1, 1, 1].map((_, index) => (
					<S.SearchResult to="/detail" key={index}>
						<S.SearchProfileImageWrap>
							<S.SearchProfileImage src="https://bssm.kro.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile_default.99e93808.png&w=128&q=75" />
						</S.SearchProfileImageWrap>
						<S.SearchProfileWrap>
							<S.ProfileName>친절한 공인중개사</S.ProfileName>
							<S.ProfileDescription>
								안녕하세요 친절한 공인중개사입니다. OO시 OO구에서 4년간 일해왔으며 그동안 <br />
								고객들의 니즈에 맞는 집들을 같이 함께 알아가며 만족스러운 중개를 도와드...
							</S.ProfileDescription>
							<S.ProfileInfo>
								OO 공인중개사 소속 XX 개인중개사
								<br />
								요양원 전문가로 작업 중
							</S.ProfileInfo>
							<S.ProfileLine />
							<S.HashTagWrap>
								<S.HashTag>#강남구</S.HashTag>
								<S.HashTag>#선릉역</S.HashTag>
								<S.HashTag>#상가</S.HashTag>
							</S.HashTagWrap>
						</S.SearchProfileWrap>
					</S.SearchResult>
				))}
			</S.SearchResultWrap>
		</S.SearchWrap>
	)
}

export default Search
