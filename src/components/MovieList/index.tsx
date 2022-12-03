import { useState } from 'react';
import { IMovie } from 'common/types';
import MovieItem from 'components/MovieItem';
import MovieListSkeleton from 'components/Skeleton/MovieListSkeleton';
import { GridViewIcon, ViewListIcon } from 'common/svg';

interface IMovieListProps {
	movieList?: IMovie[];
	loading?: boolean;
}

const MovieList: React.FC<IMovieListProps> = ({
	loading = false,
	movieList = [],
}) => {
	const [gridView, setGridView] = useState(true);

	return (
		<>
			{loading ? (
				<MovieListSkeleton gridView={gridView} />
			) : (
				<div className="space-y-5">
					<div className="flex justify-end items-center gap-2">
						<button
							type="button"
							className={`${
								gridView ? 'text-black' : 'text-gray-400 hover:text-primary'
							}`}
							onClick={() => {
								setGridView(true);
							}}
							disabled={gridView}
						>
							<GridViewIcon className="fill-current" width={28} />
						</button>
						<button
							type="button"
							className={`${
								gridView ? 'text-gray-400 hover:text-primary' : 'text-black'
							}`}
							onClick={() => {
								setGridView(false);
							}}
							disabled={!gridView}
						>
							<ViewListIcon className="fill-current" width={28} />
						</button>
					</div>
					<ul
						className={`grid gap-x-8 gap-y-10 pt-2 transition duration-300 ${
							gridView ? 'grid-cols-sm lg:grid-cols-lg' : 'grid-cols-1'
						}`}
					>
						{movieList?.map((movie) => (
							<li
								key={movie.id}
								className={`duration-300 transition ${
									gridView ? 'w-full' : 'max-w-[200px] sm:max-w-[900px] m-auto'
								}`}
							>
								<MovieItem movie={movie} gridView={gridView} />
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default MovieList;
