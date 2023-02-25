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
					<Route path="/login" element={<R.Login />} />
					<Route path="/signup" element={<R.Signup />} />
					<Route path="/life" element={<R.LifeEnroll />} />
					<Route path="/estate" element={<R.EstateEnroll />} />
					<Route path="/service" element={<R.Service />} />
					<Route path="/care" element={<R.Care />} />
				</Routes>
			</BrowserRouter>
		</RecoilRoot>
	)
}

export default App
