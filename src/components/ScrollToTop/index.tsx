import { ArrowCircleUpIcon } from 'common/svg';
import { useCallback, useEffect, useState } from 'react';

const ScrollToTop = () => {
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const checkShowScrollUp = () => {
			const scrollOffset = document.documentElement.scrollTop;
			const windowScreenHeight = window.screen.height;
			if (scrollOffset > windowScreenHeight - 100) {
				setShowScrollTop(true);
			} else {
				setShowScrollTop(false);
			}
		};

		window.addEventListener('scroll', checkShowScrollUp);

		return () => {
			window.removeEventListener('scroll', checkShowScrollUp);
		};
	}, []);

	const scrollTopHandler = useCallback(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);

	return showScrollTop ? (
		<button
			onClick={scrollTopHandler}
			className={`fixed bottom-[30px] right-[30px] animate-bounce z-50 transition duration-500 ${
				showScrollTop ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<ArrowCircleUpIcon
				className="fill-current text-primary hover:text-red-500"
				width={36}
			/>
		</button>
	) : null;
};

export default ScrollToTop;
