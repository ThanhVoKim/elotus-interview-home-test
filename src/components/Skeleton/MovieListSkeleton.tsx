import MovieItemSkeleton from './MovieItemSkeleton';

interface IMovieListSkeletonProps {
	gridView?: boolean;
}

const MovieListSkeleton: React.FC<IMovieListSkeletonProps> = ({ gridView }) => {
	return (
		<ul
			className={`grid gap-x-8 gap-y-10 
			${gridView ? 'grid-cols-sm lg:grid-cols-lg' : 'grid-col1'}`}
		>
			{Array.from({ length: 10 }).map((_, index) => (
				<li
					key={String(index)}
					className={`duration-300 transition w-full ${
						gridView ? '' : 'max-w-[200px] sm:max-w-[900px] m-auto'
					}`}
				>
					<MovieItemSkeleton gridView={gridView} />
				</li>
			))}
		</ul>
	);
};

export default MovieListSkeleton;
