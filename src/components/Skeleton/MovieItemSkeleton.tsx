import { useState } from 'react';
import { IMovie } from 'common/types';
import { Link } from 'react-router-dom';
import { FillStarIcon } from 'common/svg';
import { IMG_URL } from 'common/constants/api';
import PosterSkeleton from 'components/Skeleton/PosterSkeleton';

const MovieItemSkeleton: React.FC = () => {
	return (
		<div className="animate-pulse shadow-sm bg-dark-darken pb-2 rounded-md overflow-hidden relative group">
			<PosterSkeleton animate={false} />
			<div className="whitespace-nowrap overflow-hidden text-ellipsis text-base mt-1 text-center px-2 ">
				<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
			</div>
		</div>
	);
};

export default MovieItemSkeleton;
