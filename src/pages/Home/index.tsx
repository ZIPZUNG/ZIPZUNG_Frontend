import { Header } from 'allFiles'
import React from 'react'
import * as S from './style'

const Home = () => {
	return (
		<S.HomeWrap>
			<Header />
			<S.HomeSubWrap>
				<S.HomeListTitle>분야별 공인중개사 찾기</S.HomeListTitle>
				<S.HomeSubListWrap>
					<S.HomeSubList to="/search">
						<S.HomeSubImg src="/assets/apartment.jpg" />
						<S.HomeSubTitle>아파트</S.HomeSubTitle>
					</S.HomeSubList>
					<S.HomeSubList to="/search">
						<S.HomeSubImg src="/assets/house.jpg" />
						<S.HomeSubTitle>주거지</S.HomeSubTitle>
					</S.HomeSubList>
					<S.HomeSubList to="/search">
						<S.HomeSubImg src="/assets/building.jpg" />
						<S.HomeSubTitle>상업지</S.HomeSubTitle>
					</S.HomeSubList>
					<S.HomeSubList to="/search">
						<S.HomeSubImg src="/assets/factory.jpg" />
						<S.HomeSubTitle>공업지</S.HomeSubTitle>
					</S.HomeSubList>
					<S.HomeSubList to="/search">
						<S.HomeSubImg src="/assets/real_estate.jpg" />
						<S.HomeSubTitle>특수 부동산</S.HomeSubTitle>
					</S.HomeSubList>
				</S.HomeSubListWrap>
			</S.HomeSubWrap>
			<S.HomeSubWrap>
				<S.HomeListTitle>생활 서비스 찾기</S.HomeListTitle>
				<S.HomeSubListWrap>
					<S.HomeSubList to="/">
						<S.HomeSubImg src="/assets/move.jpeg" />
						<S.HomeSubTitle>이사</S.HomeSubTitle>
					</S.HomeSubList>
					<S.HomeSubList to="/">
						<S.HomeSubImg src="/assets/cleanup.jpg" />
						<S.HomeSubTitle>청소</S.HomeSubTitle>
					</S.HomeSubList>
					<S.HomeSubList to="/">
						<S.HomeSubImg src="/assets/interior.jpg" />
						<S.HomeSubTitle>인테리어</S.HomeSubTitle>
					</S.HomeSubList>
					<S.HomeSubList to="/">
						<S.HomeSubImg src="/assets/home_appliances.jpg" />
						<S.HomeSubTitle>폐가전</S.HomeSubTitle>
					</S.HomeSubList>
					<S.HomeSubList to="/">
						<S.HomeSubImg src="/assets/tax_accountant.jpg" />
						<S.HomeSubTitle>세무사</S.HomeSubTitle>
					</S.HomeSubList>
				</S.HomeSubListWrap>
				<S.HomeSubListWrap>
					<S.HomeSubList to="/">
						<S.HomeSubImg src="/assets/judical.jpg" />
						<S.HomeSubTitle>법무사</S.HomeSubTitle>
					</S.HomeSubList>
					<S.HomeSubList to="/"></S.HomeSubList>
					<S.HomeSubList to="/"></S.HomeSubList>
					<S.HomeSubList to="/"></S.HomeSubList>
					<S.HomeSubList to="/"></S.HomeSubList>
				</S.HomeSubListWrap>
			</S.HomeSubWrap>
		</S.HomeWrap>
	)
}

export default Home
