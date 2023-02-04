import { Header } from 'allFiles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'

const Home = () => {
	const navigate = useNavigate()

	const navigateDetail = () => {
		navigate('/detail')
	}

	return (
		<S.HomeWrap>
			<Header />
			<S.MainBackgroundInfoWrap>
				<S.MainBackboardWrap>
					<S.MainTitleText>어떤 공인중개사를 찾고 계신가요?</S.MainTitleText>
					<S.MainSelectionBar>
						<S.MainSelection>아파트</S.MainSelection>
						<S.MainSelection>주택/원룸</S.MainSelection>
						<S.MainSelection>상가/오피스</S.MainSelection>
						<S.MainSelection>토지/공장</S.MainSelection>
						<S.MainSelection>특수 부동산</S.MainSelection>
					</S.MainSelectionBar>
					{/* */}
					<S.MainSelectionBarPhoneFirst>
						<S.MainSelectionPhone to="/search">
							<svg width="40" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M0 18V4H4V0H14V8H18V18H10V14H8V18H0ZM2 16H4V14H2V16ZM2 12H4V10H2V12ZM2 8H4V6H2V8ZM6 12H8V10H6V12ZM6 8H8V6H6V8ZM6 4H8V2H6V4ZM10 12H12V10H10V12ZM10 8H12V6H10V8ZM10 4H12V2H10V4ZM14 16H16V14H14V16ZM14 12H16V10H14V12Z"
									fill="black"
								/>
							</svg>
							<span>아파트</span>
						</S.MainSelectionPhone>
						<S.MainSelectionPhone to="/search">
							<svg width="46" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z" fill="black" />
							</svg>
							<span>주택/원룸</span>
						</S.MainSelectionPhone>
					</S.MainSelectionBarPhoneFirst>
					<S.MainSelectionBarPhone>
						<S.MainSelectionPhone to="/search">
							<svg width="40" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M15 0.499983C15 0.414719 14.9782 0.330872 14.9367 0.256411C14.8951 0.181949 14.8352 0.119348 14.7627 0.0745547C14.6901 0.0297618 14.6073 0.00426609 14.5221 0.000490514C14.437 -0.00328506 14.3522 0.014785 14.276 0.0529833L6.276 4.05298C6.19305 4.09455 6.12331 4.15837 6.07456 4.23731C6.02582 4.31626 6 4.4072 6 4.49998V7.63998L0.342 9.52598C0.242478 9.55913 0.155902 9.62274 0.0945249 9.7078C0.0331481 9.79287 7.96467e-05 9.89509 0 9.99998L0 15.5C0 15.6326 0.0526784 15.7598 0.146447 15.8535C0.240215 15.9473 0.367392 16 0.5 16H9.5C9.63261 16 9.75979 15.9473 9.85355 15.8535C9.94732 15.7598 10 15.6326 10 15.5V14H11V15.5C11 15.6326 11.0527 15.7598 11.1464 15.8535C11.2402 15.9473 11.3674 16 11.5 16H14.5C14.6326 16 14.7598 15.9473 14.8536 15.8535C14.9473 15.7598 15 15.6326 15 15.5V0.499983ZM2 11H3V12H2V11ZM4 11H5V12H4V11ZM3 13V14H2V13H3ZM4 13H5V14H4V13ZM13 2.99998V3.99998H12V2.99998H13ZM8 4.99998H9V5.99998H8V4.99998ZM9 6.99998V7.99998H8V6.99998H9ZM8 8.99998H9V9.99998H8V8.99998ZM10 8.99998H11V9.99998H10V8.99998ZM9 11V12H8V11H9ZM10 11H11V12H10V11ZM13 8.99998V9.99998H12V8.99998H13ZM12 11H13V12H12V11ZM10 6.99998H11V7.99998H10V6.99998ZM13 6.99998V7.99998H12V6.99998H13ZM11 4.99998V5.99998H10V4.99998H11ZM12 4.99998H13V5.99998H12V4.99998Z"
									fill="black"
								/>
							</svg>
							<span>상업지</span>
						</S.MainSelectionPhone>
						<S.MainSelectionPhone to="/search">
							<svg width="44" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15 6V2L10 6V2L5 6V0H0V16H20V2L15 6ZM7 13H5V10H7V13ZM12 13H10V10H12V13ZM17 13H15V10H17V13Z" fill="black" />
							</svg>
							<span>공업지</span>
						</S.MainSelectionPhone>
					</S.MainSelectionBarPhone>
					<S.MainSelectionBarPhone>
						<S.MainSelectionPhone to="/search">
							<svg width="40" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M27 5H18V30H29V7C29 6.46957 28.7893 5.96086 28.4142 5.58579C28.0391 5.21071 27.5304 5 27 5ZM22 22H20V20H22V22ZM22 17H20V15H22V17ZM22 12H20V10H22V12ZM26 22H24V20H26V22ZM26 17H24V15H26V17ZM26 12H24V10H26V12Z"
									fill="black"
								/>
								<path
									d="M13.88 0H2.12C1.55774 0 1.01851 0.223356 0.620934 0.620934C0.223356 1.01851 0 1.55774 0 2.12V30H5V27H11V30H16V2.12C16 1.55774 15.7766 1.01851 15.3791 0.620934C14.9815 0.223356 14.4423 0 13.88 0ZM5 22H3V20H5V22ZM5 17H3V15H5V17ZM5 12H3V10H5V12ZM5 7H3V5H5V7ZM9 22H7V20H9V22ZM9 17H7V15H9V17ZM9 12H7V10H9V12ZM9 7H7V5H9V7ZM13 22H11V20H13V22ZM13 17H11V15H13V17ZM13 12H11V10H13V12ZM13 7H11V5H13V7Z"
									fill="black"
								/>
							</svg>
							<span>특수 부동산</span>
						</S.MainSelectionPhone>
					</S.MainSelectionBarPhone>
					<S.MainRecommendButtonPhone>공인중개사 제안받기</S.MainRecommendButtonPhone>
					{/* */}
					<S.MainSearchWrap>
						<S.MainSearchInput type="text" placeholder="원하시는 공인중개사를 검색해보세요!" />
						<S.MainSearchButton onClick={navigateDetail}>검색하기</S.MainSearchButton>
					</S.MainSearchWrap>
				</S.MainBackboardWrap>
			</S.MainBackgroundInfoWrap>
			<S.PhoneWrap>
				<S.PhoneMockupImage src="assets/mockup.png" />
				<S.PhoneDownloadWrap>
					<S.PhoneTitleText>집중 앱을 다운 받으세요!</S.PhoneTitleText>
					<S.PhoneButtonWrap>
						<S.ButtonImage src="assets/googlePlay.png" />
						<S.ButtonImage src="assets/appStore.png" />
					</S.PhoneButtonWrap>
				</S.PhoneDownloadWrap>
			</S.PhoneWrap>
		</S.HomeWrap>
	)
}

export default Home
