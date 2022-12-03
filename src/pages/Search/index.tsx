import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IMovie, IMovieResponse } from 'common/types';
import { getSearchMovie } from 'services/movies';
import Pagination from 'components/Pagination';
import MovieList from 'components/MovieList';

const Search: React.FC = () => {
	const [moviesResponse, setMoviesResponse] =
		useState<IMovieResponse<IMovie>>();
	const [loading, setLoading] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

	const { page = 1, query = '' } = Object.fromEntries(searchParams);

	useEffect(() => {
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
				<div className="space-y-5">
					{results?.length > 0 ? (
						<p className=" md:text-xl text-lg">
							Search results for &quot;{searchParams.get('query') || ''}&quot; (
							{total_results} results found)
						</p>
					) : (
						<p className="md:text-xl text-lg mb-6">No results found</p>
					)}
					<MovieList movieList={results} loading={loading} />
				</div>
				{total_pages > 0 ? (
					<Pagination
						currentPage={Number(searchParams.get('page') || 1)}
						onClick={renderSearchParams}
						totalPage={total_pages}
					/>
				) : null}
			</div>
		</div>
	);
};

export default Search;
