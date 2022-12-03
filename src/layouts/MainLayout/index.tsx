import React, { useRef } from 'react';
import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { SearchIcon } from 'common/svg';
import ScrollToTop from 'components/ScrollToTop';

const MainLayout: React.FC = () => {
	const [searchParams] = useSearchParams();
	const searchInputRef = useRef(searchParams.get('query'));
	const navigate = useNavigate();

	const changeQueryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		searchInputRef.current = e.target.value;
	};

	const searchSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		navigate(`/search?query=${searchInputRef.current || ''}`);
	};

	return (
		<>
			<header className="bg-stone-900 py-3 sticky top-0 z-50">
				<div className="container flex items-center gap-5 text-white">
					<div className="flex-none">
						<Link to="/">Home</Link>
					</div>
					<div className="shadow-md group bg-stone-700 text-white rounded-full flex-auto">
						<form className="relative" onSubmit={searchSubmitHandler}>
							<input
								className="w-full pl-7 pr-14 outline-none bg-transparent py-2 placeholder-gray-500 text-white"
								type="text"
								placeholder="Search..."
								onChange={changeQueryHandler}
								defaultValue={searchInputRef.current || ''}
							/>
							<button className="absolute top-1/2 -translate-y-1/2 right-5">
								<SearchIcon
									className="hover:text-white transition duration-300 fill-current"
									width={25}
								/>
							</button>
						</form>
					</div>
				</div>
			</header>
			<main className="">
				<Outlet />
				<ScrollToTop />
			</main>
		</>
	);
};
export default MainLayout;
