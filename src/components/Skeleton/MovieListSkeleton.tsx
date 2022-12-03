import MovieItemSkeleton from './MovieItemSkeleton';

const MovieListSkeleton = () => {
	return (
		<ul className="grid grid-cols-sm lg:grid-cols-lg gap-x-8 gap-y-10">
			{Array.from({ length: 10 }).map((_, index) => (
				<li key={String(index)}>
					<MovieItemSkeleton />
				</li>
			))}
		</ul>
	);
};

export default MovieListSkeleton;
