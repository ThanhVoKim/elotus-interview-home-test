import React, { Suspense } from 'react';

interface ISuspenseElementProps {
	children: React.ReactNode;
	title?: string;
}

const SuspenseElement: React.FC<ISuspenseElementProps> = ({ children }) => {
	return <Suspense fallback={<div>loading...</div>}>{children}</Suspense>;
};

export default SuspenseElement;
