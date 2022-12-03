import React, { useCallback, useEffect, useState } from 'react';

const useScrollTop = () => {
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const checkShowScrollUp = () => {
			const scrollOffset = document.documentElement.scrollTop;
			const windowScreenHeight = window.screen.height;
			if (scrollOffset > windowScreenHeight) {
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

	return { showScrollTop, scrollTopHandler };
};

export default useScrollTop;
