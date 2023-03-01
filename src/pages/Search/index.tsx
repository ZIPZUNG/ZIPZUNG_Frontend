import { Header, SearchEngine } from 'allFiles'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './style'

const Search = () => {
	const router = useParams()
	const [type, setType] = React.useState('')

	useEffect(() => {
		setType(window.location.search.replace('?type=', ''))
	}, [router])

	return (
		<S.SearchWrap>
			<Header />
			<SearchEngine type={type} />
			<S.SearchResultWrap>
				{[1, 1, 1, 1, 1, 1, 1].map((_, index) => (
					<S.SearchResult to="/detail" key={index}>
						<S.SearchProfileImageWrap>
							<S.SearchProfileImage src="https://bssm.kro.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile_default.99e93808.png&w=128&q=75" />
							<S.SearchProfileInfo>
								전문분야 | <span>{'아파트'}</span>
							</S.SearchProfileInfo>
							<S.SearchProfileInfo>
								소속 | <span>{'공인중개사'}</span>
							</S.SearchProfileInfo>
							<S.SearchProfileInfo>
								매물보유수 | <span>{100}개</span>
							</S.SearchProfileInfo>
							<S.SearchProfileInfo>평점 | {4.5}/5.0</S.SearchProfileInfo>
						</S.SearchProfileImageWrap>
						<S.SearchProfileWrap>
							<S.ProfileName>친절한 공인중개사</S.ProfileName>
							<S.ProfileDescription>안녕하세요 친절한 공인중개사입니다. OO시 OO구에서 4년간 일해왔으며 그동안...</S.ProfileDescription>
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

export default Search
