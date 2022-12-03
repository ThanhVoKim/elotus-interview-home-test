import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IMovie } from 'common/types';
import { Link } from 'react-router-dom';
import { FillStarIcon } from 'common/svg';
import { IMG_URL } from 'common/constants/api';
import PosterSkeleton from 'components/Skeleton/PosterSkeleton';

interface IMovieItemProps {
	movie: IMovie;
	gridView: boolean;
}

const MovieItem: React.FC<IMovieItemProps> = ({ movie, gridView = true }) => {
	const {
		poster_path,
		id,
		title,
		vote_average,
		overview,
		release_date,
		original_language,
	} = movie;
	return (
		<Link to={{ pathname: `/movies/${id}` }}>
			<div
				className={`shadow-sm bg-dark-darken pb-2 rounded-md overflow-hidden 
				hover:scale-105 hover:brightness-110 transition duration-300 relative 
				group ${gridView ? 'block' : 'sm:flex items-center gap-5 p-2 sm:p-5'}`}
			>
				<div className="flex justify-center sm:block flex-none">
					{poster_path ? (
						<LazyLoadImage
							alt="Poster film"
							src={`${IMG_URL}/w200${poster_path}`}
							placeholder={<PosterSkeleton />}
							className="block object-cover lazy-img h-full"
							wrapperClassName="m-auto"
							effect="opacity"
							height={260}
							threshold={100}
						/>
					) : (
						<PosterSkeleton />
					)}
				</div>
				<div className="space-y-2 text-sm mt-2 sm:mt-0">
					{gridView ? (
						<p
							className="whitespace-nowrap overflow-hidden text-ellipsis
						 text-base mt-1 text-center px-2 group-hover:text-primary transition duration-300"
						>
							{title}
						</p>
					) : (
						<>
							<p
								className="whitespace-nowrap overflow-hidden text-ellipsis
								 text-base sm:text-lg text-center sm:text-left font-medium
								 group-hover:text-primary transition duration-300"
							>
								{title}
							</p>
							{overview ? (
								<p className="hidden sm:block text-gray-700">{overview}</p>
							) : null}
							{release_date ? (
								<p className="hidden sm:block ">Release date: {release_date}</p>
							) : null}
							{original_language ? (
								<p className="hidden sm:block ">
									Language: {original_language}
								</p>
							) : null}
						</>
					)}
				</div>

				<div
					className={`bg-yellow-500 px-1 py-0.5 rounded-tl-lg rounded-br-lg 
					flex items-center gap-1 text-white text-xs
					absolute z-20 ${gridView ? 'top-[3px] left-[3px]' : 'left-3 top-3'}`}
				>
					{vote_average?.toFixed(1)}
					<FillStarIcon className="text-[15px]" />
				</div>
			</div>
		</Link>
	);
};

export default MovieItem;
