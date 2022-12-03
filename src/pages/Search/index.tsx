import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { IMovie, IMovieResponse } from 'common/types';
import { getSearchMovie } from 'services/movies';
import MovieItem from 'components/MovieItem';
import Pagination from 'components/Pagination';
import MovieListSkeleton from 'components/Skeleton/MovieListSkeleton';

const MovieList: React.FC = () => {
	const [moviesResponse, setMoviesResponse] =
		useState<IMovieResponse<IMovie>>();
	const [loading, setLoading] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

	const { page = 1, query = '' } = Object.fromEntries(searchParams);

	useEffect(() => {
		// console.log({ page, query });
		(async () => {
			setLoading(true);
			const response = (await getSearchMovie({ page, query })) || {};
			setMoviesResponse(response);
			setLoading(false);
		})();
	}, [page, query]);

	const renderSearchParams = (page: number): void => {
		setSearchParams((prevParams) => ({
			...Object.fromEntries(prevParams),
			page: String(page),
		}));
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const {
		total_results = 0,
		total_pages = 0,
		results = [],
	} = moviesResponse || {};

	return (
		<div className="container">
			<div className="py-10">
				{loading ? (
					<MovieListSkeleton />
				) : results?.length > 0 ? (
					<div className="space-y-5">
						<p className=" md:text-xl text-lg">
							Search results for &quot;{searchParams.get('query') || ''}&quot; (
							{total_results} results found)
						</p>
						<ul className="grid grid-cols-sm lg:grid-cols-lg gap-x-8 gap-y-10">
							{results.map((movie) => (
								<li key={movie.id}>
									<MovieItem movie={movie} />
								</li>
							))}
						</ul>
						<Pagination
							currentPage={Number(searchParams.get('page') || 1)}
							onClick={renderSearchParams}
							totalPage={Number(total_pages)}
						/>
					</div>
				) : (
					<p className="md:text-xl text-lg mb-6">No results found</p>
				)}
			</div>
		</div>
	);
};

export default MovieList;
