import React from 'react';
import PosterSkeleton from './PosterSkeleton';

const BackdropSkeleton = () => {
	return (
		<div className="h-auto md:h-[500px] rounded-bl-2xl relative text-gray-100 py-[25px]">
			<div className="bg-gradient-to-br from-transparent to-black/70 h-full absolute inset-0 z-[0] pointer-events-none " />
			<div className="absolute inset-0 -z-[1] bg-slate-200 dark:bg-slate-700" />
			<div className="flex flex-col md:flex-row md:items-center gap-[40px] container max-h-full relative z-10">
				<div className="w-[300px] flex-none">
					<PosterSkeleton />
				</div>
				<div className="flex-auto space-y-6 text-white">
					<div>
						<div>
							<div className="h-2 bg-slate-200 dark:bg-slate-700 rounded max-w-[70%]" />
						</div>
					</div>
					<div className="flex flex-wrap gap-2">
						{Array.from({ length: 2 })?.map((_, index) => (
							<div
								key={index}
								className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-[50px]"
							/>
						))}
					</div>
					<div className="space-y-4">
						<div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-[100px]" />
						<div className="h-2 bg-slate-200 dark:bg-slate-700 rounded max-w-[50%]" />
						<div className="h-2 bg-slate-200 dark:bg-slate-700 rounded max-w-[50%]" />
						<div className="h-2 bg-slate-200 dark:bg-slate-700 rounded max-w-[50%]" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BackdropSkeleton;
