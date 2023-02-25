import * as R from 'allFiles'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const App = () => {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<R.Home />} />
					<Route path="/search" element={<R.Search />} />
					<Route path="/detail" element={<R.Detail />} />
					<Route path="/application" element={<R.Application />} />
				</Routes>
			</BrowserRouter>
		</RecoilRoot>
	)
}

export default App
