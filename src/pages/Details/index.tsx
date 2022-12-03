import { IMG_URL } from 'common/constants/api';
import { FillStarIcon } from 'common/svg';
import { ICast, IMovieDetails } from 'common/types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { currencyFormat, minutesToHoursString } from 'common/utils/string';
import CircleSkeleton from 'components/Skeleton/CircleSkeleton';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieFullDetail } from 'services/movies';
import BackdropSkeleton from 'components/Skeleton/BackdropSkeleton';

// interface IDetailsProps {}

const Details: React.FC = () => {
	const [movieDetails, setMovieDetails] = useState<IMovieDetails>();
	const [casts, setCasts] = useState<ICast[]>([]);
	const [loading, setLoading] = useState(false);

	const { id } = useParams();

	useEffect(() => {
		const fetchMovieDetailsApi = async () => {
			setLoading(true);
			const { details, casts = [] } = (await getMovieFullDetail(id!)) || {};
			setMovieDetails(details);
			setCasts(casts);
			setLoading(false);
		};
		fetchMovieDetailsApi();
	}, [id]);

	const {
		poster_path,
		backdrop_path,
		title,
		release_date = '',
		runtime,
		genres,
		tagline,
		overview,
		vote_average,
		vote_count,
		status,
		budget,
		revenue,
		spoken_languages,
	} = movieDetails || {};

	return (
		<>
			{loading ? (
				<BackdropSkeleton />
			) : (
				<div className="h-auto md:h-[500px] rounded-bl-2xl relative text-gray-100 py-[25px]">
					<div className="bg-gradient-to-br from-transparent to-black/70 h-full absolute inset-0 z-[0] pointer-events-none " />
					<div className="absolute inset-0 -z-[1]">
						<picture>
							<source
								media="(max-width: 767px)"
								srcSet={`${IMG_URL}/w780${backdrop_path}`}
							/>
							<source
								media="(min-width: 768px)"
								srcSet={`${IMG_URL}/w1280${backdrop_path}`}
							/>
							<img
								src={`${IMG_URL}/w1280${backdrop_path}`}
								alt="Poster"
								className="block w-full h-full object-cover object-top"
							/>
						</picture>
					</div>
					<div className="flex flex-col md:flex-row md:items-center gap-[40px] container max-h-full relative z-10">
						<div className="w-[300px] flex-none">
							<picture>
								<source
									media="(max-width: 767px)"
									srcSet={`${IMG_URL}/w185${poster_path}`}
								/>
								<source
									media="(min-width: 768px)"
									srcSet={`${IMG_URL}/w342${poster_path}`}
								/>
								<img
									src={`${IMG_URL}/w342${poster_path}`}
									alt="Poster"
									className="block object-cover max-h-[300px] md:max-h-[450px]"
								/>
							</picture>
						</div>
						<div className="flex-auto space-y-6 text-white">
							<div>
								<div>
									<h1 className="text-4xl font-bold">
										{title}{' '}
										<span className="text-gray-200 font-normal">
											({new Date(release_date).getFullYear()})
										</span>
									</h1>
								</div>
								<div className="flex gap-1">
									{runtime ? (
										<div className="px-1 py-[0.5px] ">
											{minutesToHoursString(runtime)}
										</div>
									) : null}
								</div>
							</div>
							<div className="flex flex-wrap gap-2">
								{genres?.map((gen) => (
									<p
										key={gen.id}
										className="md:px-4 px-1.5 md:py-1 py-0.5 rounded-full uppercase font-medium border-solid border border-gray-100 md:text-gray-100"
									>
										{gen.name}
									</p>
								))}
							</div>
							<div>
								<p className="text-gray-300">{tagline}</p>
								<p className="font-medium my-2">Overview</p>
								<p className="">{overview}</p>
							</div>
							<div className="flex items-center gap-1">
								<FillStarIcon
									className="fill text-yellow-400 text-2xl"
									height={24}
									width={24}
								/>
								<div className="space-y-1 leading-none">
									<p className="font-medium">{vote_average?.toFixed(1)}/10</p>
									<p className="text-[12px]">{vote_count}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className="container py-5 space-y-4 bg-[#f8f8f8]">
				{movieDetails ? (
					<div className="text-lg">
						<div className="space-y-0.5">
							<p className="text-gray-800 font-medium mb-3">DETAILS</p>
							<p>Status: {status}</p>
							{budget ? <p>Budget: {currencyFormat(budget)}</p> : null}
							{revenue ? <p>Revenue: {currencyFormat(revenue)}</p> : null}
							<p>
								Spoken language:{' '}
								{spoken_languages?.map((s) => s.english_name).join(', ')}
							</p>
						</div>
					</div>
				) : null}

				<div className="space-y-0.5">
					<p className="text-gray-800 text-lg font-medium mb-3">CAST</p>
					<ul className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
						{casts?.slice(0, 12)?.map((cast) => (
							<li key={cast.id} className="flex gap-3 items-center">
								<div className="shrink-0 max-w-[65px] w-full h-[65px]">
									{cast.profile_path ? (
										<LazyLoadImage
											alt="avatar cast"
											src={`${IMG_URL}/w185${cast.profile_path}`}
											placeholder={
												<CircleSkeleton className="h-[65px] w-[65px]" />
											}
											className="object-cover rounded-full h-[65px] w-[65px]"
											effect="opacity"
										/>
									) : (
										<CircleSkeleton className="h-[65px] w-[65px]" />
									)}
								</div>
								<div className="flex-grow">
									<p className="text-lg font-medium">{cast.name}</p>
									<p className="text-gray-700 text-base">
										<span className="italic">as</span> {cast.character}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Details;
