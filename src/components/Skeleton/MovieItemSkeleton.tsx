import PosterSkeleton from 'components/Skeleton/PosterSkeleton';

interface IMovieItemSkeletonProps {
	gridView?: boolean;
}

const MovieItemSkeleton: React.FC<IMovieItemSkeletonProps> = ({
	gridView = true,
}) => {
	return (
		<div
			className={`animate-pulse shadow-sm bg-dark-darken pb-2 rounded-md overflow-hidden ${
				gridView ? 'block' : 'flex items-center gap-5 p-2 sm:p-5'
			}`}
		>
			<div className="flex-none w-posterGrid max-w-full">
				<PosterSkeleton />
			</div>
			{gridView ? (
				<div className="mt-1 px-2 ">
					<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
				</div>
			) : (
				<div className="space-y-5 flex-auto">
					<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-[50%]" />
					<div className="h-1.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-[80%]" />
					<div className="h-1.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-[60%]" />
					<div className="h-1.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full max-w-[100px]" />
				</div>
			)}
		</div>
	);
};

export default MovieItemSkeleton;
