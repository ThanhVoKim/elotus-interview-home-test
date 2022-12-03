import { ImageSkeleton } from 'common/svg';

const PosterSkeleton = () => {
	return (
		<div
			className={
				'w-full h-0 pb-[140%] overflow-hidden relative bg-gray-400 dark:bg-gray-700 '
			}
		>
			<ImageSkeleton className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-200 object-cover  z-1" />
		</div>
	);
};

export default PosterSkeleton;
