import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IMovie } from 'common/types';
import { Link } from 'react-router-dom';
import { FillStarIcon } from 'common/svg';
import { IMG_URL } from 'common/constants/api';
import PosterSkeleton from 'components/Skeleton/PosterSkeleton';

import 'react-lazy-load-image-component/src/effects/opacity.css';

interface IMovieItemProps {
	movie: IMovie;
}

const MovieItem: React.FC<IMovieItemProps> = ({ movie }) => {
	const { poster_path, id, title, vote_average } = movie;
	return (
		<Link to={{ pathname: `/movies/${id}` }}>
			<div
				className="shadow-sm bg-dark-darken pb-2 rounded-md overflow-hidden 
				hover:scale-105 hover:brightness-110 transition duration-300 relative 
				group fade-box"
			>
				{poster_path ? (
					<LazyLoadImage
						alt="Poster film"
						afterLoad={() => console.log(title)}
						src={`${IMG_URL}/w200${poster_path}`}
						placeholder={<PosterSkeleton />}
						className="block object-cover lazy-img"
						effect="opacity"
						height={260}
						threshold={100}
					/>
				) : (
					<PosterSkeleton animate={false} />
				)}
				<p className="whitespace-nowrap overflow-hidden text-ellipsis text-base mt-1 text-center px-2 group-hover:text-primary transition duration-300">
					{title}
				</p>
				<div className="bg-yellow-500 px-1 py-0.5 rounded-tl-lg rounded-br-lg absolute top-[3px] left-[3px] z-20 flex items-center gap-1 text-white text-xs">
					{vote_average?.toFixed(1)}
					<FillStarIcon className="text-[15px]" />
				</div>
			</div>
		</Link>
	);
};

export default MovieItem;
