import React, { Suspense } from 'react';

interface ISuspenseElementProps {
	children: React.ReactNode;
	title?: string;
}

const SuspenseElement: React.FC<ISuspenseElementProps> = ({
	children,
	title = 'Movies',
}) => {
	document.title = title;
	return <Suspense fallback={<div>loading...</div>}>{children}</Suspense>;
};

export default SuspenseElement;
