import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout';
import SuspenseElement from 'components/SuspenseElement';

const Home = lazy(() => import('pages/Home'));
const Details = lazy(() => import('pages/Details'));
const Search = lazy(() => import('pages/Search'));

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route
						index
						element={
							<SuspenseElement>
								<Home />
							</SuspenseElement>
						}
					/>
					<Route
						path="/movies/:id"
						element={
							<SuspenseElement>
								<Details />
							</SuspenseElement>
						}
					/>
					<Route
						path="/search"
						element={
							<SuspenseElement>
								<Search />
							</SuspenseElement>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
