import useScrollTop from 'common/hooks/useScrollTop';
import { ArrowCircleUpIcon } from 'common/svg';
import { Link, useSearchParams } from 'react-router-dom';

import MovieList from './MovieList';

export const MOVIE_TAB = {
	now_playing: {
		value: 'now_playing',
		label: 'Now playing',
	},
	top_rated: {
		value: 'top_rated',
		label: 'Top rated',
	},
};

const Home: React.FC = () => {
	const [searchParams] = useSearchParams();

	const { showScrollTop, scrollTopHandler } = useScrollTop();

	const currentTab = searchParams.get('tab') || MOVIE_TAB['now_playing'].value;

	return (
		<div className="container py-4 pb-10">
			<div className="inline-flex gap-[40px] pb-[10px] border-b border-solid border-b-gray-400 relative mb-6">
				<Link
					to={{ search: `?tab=${MOVIE_TAB['now_playing'].value}` }}
					className={`${
						currentTab === MOVIE_TAB['now_playing'].value &&
						'text-primary font-medium '
					} transition duration-300 hover:text-primary-dark`}
				>
					{MOVIE_TAB['now_playing'].label}
				</Link>
				<Link
					to={{ search: `?tab=${MOVIE_TAB['top_rated'].value}` }}
					className={`${
						currentTab === MOVIE_TAB['top_rated'].value &&
						'text-primary font-medium'
					} transition duration-300 hover:text-primary-dark`}
				>
					{MOVIE_TAB['top_rated'].label}
				</Link>
			</div>

			<MovieList />

			{showScrollTop && (
				<button
					onClick={scrollTopHandler}
					className={`fixed bottom-[30px] right-[30px] animate-bounce z-10 transition duration-500 ${
						showScrollTop ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<ArrowCircleUpIcon />
				</button>
			)}
		</div>
	);
};

export default Home;
