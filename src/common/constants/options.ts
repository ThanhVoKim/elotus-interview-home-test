export interface IOptions {
	[k: string]: string;
	value: string;
	label: string;
}

export const SORT_OPTIONS: IOptions[] = [
	{ value: 'popularity.desc', label: 'Most popular' },
	{ value: 'vote_average.desc', label: 'Most rating' },
	{ value: 'release_date.desc', label: 'Most recent' },
];
