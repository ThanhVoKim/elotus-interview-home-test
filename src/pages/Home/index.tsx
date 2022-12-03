import { IMovie } from 'common/types';
import Pagination from 'components/Pagination';
import { useState, useCallback, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getNowPlayingMovie, getTopRatedMovie } from 'services/movies';

import MovieList from 'components/MovieList';

export const MOVIE_TAB = {
	now_playing: {
		value: 'now_playing',
		label: 'Now playing',
	},
	top_rated: {
		value: 'top_rated',
		label: 'Top rated',
	},
};

const Home: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { page = 1, tab = MOVIE_TAB.now_playing.value } =
		Object.fromEntries(searchParams);

	const [movieList, setMovieList] = useState<IMovie[]>([]);
	const [loading, setLoading] = useState(false);
	const [totalPage, setTotalPage] = useState(0);

	const fetchMovieApi = useCallback(
		async (page: number) => {
			const movieApi =
				tab === MOVIE_TAB.now_playing.value
					? getNowPlayingMovie
					: getTopRatedMovie;
			return await movieApi({ page });
		},
		[tab],
	);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const { results = [], total_pages = 0 } =
				(await fetchMovieApi(Number(page) || 1)) || {};
			setMovieList(results);
			setTotalPage(total_pages);
			setLoading(false);
		})();
	}, [page, tab]);

	const changePageHandler = (page: number): void => {
		searchParams.set('page', String(page));
		setSearchParams((prevParams) => ({
			...Object.fromEntries(prevParams),
			page: String(page),
		}));
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className="container py-4 pb-10">
			<div className="inline-flex gap-[40px] pb-[10px] border-b border-solid border-b-gray-400 relative mb-6">
				<Link
					to={{ search: `?tab=${MOVIE_TAB['now_playing'].value}` }}
					className={`${
						tab === MOVIE_TAB['now_playing'].value &&
						'text-primary font-medium '
					} transition duration-300 hover:text-primary-dark`}
				>
					{MOVIE_TAB['now_playing'].label}
				</Link>
				<Link
					to={{ search: `?tab=${MOVIE_TAB['top_rated'].value}` }}
					className={`${
						tab === MOVIE_TAB['top_rated'].value && 'text-primary font-medium'
					} transition duration-300 hover:text-primary-dark`}
				>
					{MOVIE_TAB['top_rated'].label}
				</Link>
			</div>

			<MovieList loading={loading} movieList={movieList} />

			<Pagination
				currentPage={Number(searchParams.get('page') || 1)}
				onClick={changePageHandler}
				totalPage={totalPage}
			/>
		</div>
	);
};

export default Home;
