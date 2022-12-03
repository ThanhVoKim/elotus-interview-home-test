import React from 'react';

const CircleSkeleton = ({ className = '' }) => {
	return (
		<div
			className={`rounded-full bg-slate-200 dark:bg-slate-700 ${className}`}
		/>
	);
};

export default CircleSkeleton;
