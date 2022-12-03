import { useCallback, useEffect, useState } from 'react';
import { IMovie } from 'common/types';
import { getNowPlayingMovie, getTopRatedMovie } from 'services/movies';
import MovieItem from 'components/MovieItem';
import { MOVIE_TAB } from '..';
import { useSearchParams } from 'react-router-dom';
import Pagination from 'components/Pagination';
import MovieListSkeleton from 'components/Skeleton/MovieListSkeleton';

const MovieList: React.FC = () => {
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
		<>
			{loading ? (
				<MovieListSkeleton />
			) : (
				<div>
					<ul className="grid grid-cols-sm lg:grid-cols-lg gap-x-8 gap-y-10 pt-2">
						{movieList.map((movie) => (
							<li key={movie.id}>
								<MovieItem movie={movie} />
							</li>
						))}
					</ul>
				</div>
			)}
			<Pagination
				currentPage={Number(searchParams.get('page') || 1)}
				onClick={changePageHandler}
				totalPage={totalPage}
			/>
		</>
	);
};

export default MovieList;
