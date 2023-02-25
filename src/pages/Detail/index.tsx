import { Header } from 'allFiles'
import React from 'react'
import * as S from './style'

const Detail = () => {
	const [isDetail, setIsDetail] = React.useState(false)
	const [isViewProfile, setIsViewProfile] = React.useState(true)

	const onClickViewDetail = () => {
		setIsDetail(!isDetail)
	}

	return (
		<S.DetailWrap>
			<Header />
			<S.DetailMainWrap>
				<S.DetailProfileWrap>
					<S.DetailProfileImageWrap>
						<S.DetailProfileImage src="https://bssm.kro.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile_default.99e93808.png&w=128&q=75" />
					</S.DetailProfileImageWrap>
					<S.DetailProfileDescriptionWrap>
						<S.ProfileName>친절한 공인중개사</S.ProfileName>
						<S.ReviewCount>32개의 후기</S.ReviewCount>
						<S.HashTagWrap>
							<S.HashTag>#강남구</S.HashTag>
							<S.HashTag>#선릉역</S.HashTag>
							<S.HashTag>#상가</S.HashTag>
						</S.HashTagWrap>
					</S.DetailProfileDescriptionWrap>
					<S.ContactWrap>
						<S.ContactButton>문의하기</S.ContactButton>
					</S.ContactWrap>
				</S.DetailProfileWrap>
				<S.ToggleSelectionWrap>
					<S.ToggleSelection color={`${isViewProfile}`} onClick={() => setIsViewProfile(!isViewProfile)}>
						프로필
					</S.ToggleSelection>
					<S.ToggleSelection color={`${!isViewProfile}`} onClick={() => setIsViewProfile(!isViewProfile)}>
						고객 후기
					</S.ToggleSelection>
				</S.ToggleSelectionWrap>
				{isViewProfile ? (
					<>
						<S.DetailInfoText>
							근무형태 <span>| OO 공인 중개사</span>
						</S.DetailInfoText>
						<S.DetailInfoText>
							전문 분야 <span>| 아파트,오피스 공인 중개</span>
						</S.DetailInfoText>
						<S.DetailInfoText>
							공인중개사 전화번호 <span>| 010-0000-0000</span>
						</S.DetailInfoText>
						<S.DetailInfoText>
							사업자 등록 번호 <span>| 3AN23TB-GLNK2-BDL25J-VBLLBAS</span>
						</S.DetailInfoText>
						<S.DetailMainTitleText>담당자 매물 바로가기</S.DetailMainTitleText>
						<S.DetailMainNavigationWrap>
							<S.DetailMainNavigation width="38" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z"
									fill="black"
								/>
							</S.DetailMainNavigation>
							<S.DetailMainNavigation width="34" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0ZM10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM16.5 4.75C16.5 4.41848 16.3683 4.10054 16.1339 3.86612C15.8995 3.6317 15.5815 3.5 15.25 3.5C14.9185 3.5 14.6005 3.6317 14.3661 3.86612C14.1317 4.10054 14 4.41848 14 4.75C14 5.08152 14.1317 5.39946 14.3661 5.63388C14.6005 5.8683 14.9185 6 15.25 6C15.5815 6 15.8995 5.8683 16.1339 5.63388C16.3683 5.39946 16.5 5.08152 16.5 4.75ZM10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7Z"
									fill="black"
								/>
							</S.DetailMainNavigation>
							<S.DetailMainNavigation width="34" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
									fill="black"
								/>
							</S.DetailMainNavigation>
							<S.DetailMainNavigation width="34" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M2 18C1.45 18 0.979 17.8043 0.587 17.413C0.195667 17.021 0 16.55 0 16V2C0 1.45 0.195667 0.979 0.587 0.587C0.979 0.195667 1.45 0 2 0H16C16.55 0 17.021 0.195667 17.413 0.587C17.8043 0.979 18 1.45 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.021 17.8043 16.55 18 16 18H2ZM3 14H15L11.25 9L8.25 13L6 10L3 14Z"
									fill="black"
								/>
							</S.DetailMainNavigation>
						</S.DetailMainNavigationWrap>
						<S.DetailMainTitleText>소개</S.DetailMainTitleText>
						{isDetail ? (
							<S.DetailMainDescriptionText>
								안녕하세요 친절한 공인중개사입니다. OO시 OO구에서 4년간 일해왔으며 그동안 <br />
								고객들의 니즈에 맞는 집들을 같이 함께 알아가며 만족스러운 중개를 도와드...
								<br />
								is simply dummy text of the printing and typesetting indu
								<br />
								stry. Lorem Ipsum has been the industry standard dummy te
								<br />
								xt ever since the 1500s, when an unknown printer took a g<br />
								alley of type and scrambled it to make a type specimen bo
								<br />
								ok. It has survived not only five centuries, but also the
								<br />
								leap into electronic typesetting, remaining essentially un
								<br />
								changed. It was popularised in the 1960s with the release <br />
								of Letraset sheets containing Lorem Ipsum passages, and mo
								<br />
								re recently with desktop publishing software like Aldus Pa
								<br />
								geMaker including versions of Lorem Ipsum.
							</S.DetailMainDescriptionText>
						) : (
							<S.DetailMainDescriptionText>
								안녕하세요 친절한 공인중개사입니다. OO시 OO구에서 4년간 일해왔으며 그동안 <br />
								고객들의 니즈에 맞는 집들을 같이 함께 알아가며 만족스러운 중개를 도와드...
							</S.DetailMainDescriptionText>
						)}
						<S.DetailToggleView onClick={onClickViewDetail}>
							{isDetail ? (
								<>
									<span>기본정보 닫기</span>
									<svg width="12" height="12" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.238 5L5.23804 0L0.238037 5H10.238Z" fill="black" />
									</svg>
								</>
							) : (
								<>
									<span>기본정보 더보기</span>
									<svg width="12" height="12" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0.238037 0L5.23804 5L10.238 0H0.238037Z" fill="black" />
									</svg>
								</>
							)}
						</S.DetailToggleView>
					</>
				) : (
					<S.DetailCustomerReviewWrap>
						{[1, 1, 1, 1, 1, 1].map((_, index) => (
							<S.DetailCustomerBox key={index}>
								<S.DetailCustomerTitle>너무 간편하고 좋아요</S.DetailCustomerTitle>
								<S.DetailCustomerReview>
									leap into electronic typesetting, remaining essentially un changed. It was popularised in the 1960s with the release <br />
									of Letraset sheets containing Lorem Ipsum passages, and mo re recently with desktop publishing software like Aldus Pa geMaker
									including versions of Lorem Ipsum.
								</S.DetailCustomerReview>
								<S.DetailCustomerImgWrap>
									<S.DetailCustomerImg src="/assets/test_house.png" />
									<S.DetailCustomerImg src="/assets/test_house2.png" />
									<S.DetailCustomerImg src="/assets/test_house3.png" />
								</S.DetailCustomerImgWrap>
							</S.DetailCustomerBox>
						))}
					</S.DetailCustomerReviewWrap>
				)}
			</S.DetailMainWrap>
		</S.DetailWrap>
	)
}

export default Detail
