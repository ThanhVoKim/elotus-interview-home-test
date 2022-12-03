import { AxiosError } from 'axios';
import { IMovie, IMovieFullDetail, IMovieResponse } from 'common/types';
import axios from 'common/utils/axios';
import { toastNotify } from 'common/utils/toastNotify';

export const getNowPlayingMovie = async (
	params: Record<string, any>,
): Promise<IMovieResponse<IMovie> | undefined> => {
	try {
		const response = await axios.get(`/movie/now_playing`, {
			params,
		});

		return response?.data;
	} catch (error: any) {
		console.error(error);
		toastNotify(String(error?.message), { type: 'error' });
	}
};

export const getTopRatedMovie = async (
	params: Record<string, any>,
): Promise<IMovieResponse<IMovie> | undefined> => {
	try {
		const response = await axios.get(`/movie/top_rated`, {
			params,
		});
		return response?.data;
	} catch (error: any) {
		console.error(error);
		toastNotify(String(error?.message), { type: 'error' });
	}
};

export const getSearchMovie = async (
	params: Record<string, any>,
): Promise<IMovieResponse<IMovie> | undefined> => {
	try {
		const response = await axios.get(`search/movie`, {
			params,
		});
		return response?.data;
	} catch (error: any) {
		console.error(error);
		toastNotify(String(error?.message), { type: 'error' });
	}
};

export const getMovieFullDetail = async (
	id: string | number,
): Promise<IMovieFullDetail | undefined> => {
	try {
		const [detailsResponse, creditsResponse] = await Promise.all([
			axios.get(`/movie/${id}`),
			axios.get(`/movie/${id}/credits`),
		]);
		const details = detailsResponse?.data || {};
		const { cast: casts } = creditsResponse?.data || {};

		return { details, casts };
	} catch (error: any) {
		console.error(error);
		toastNotify(String(error?.message), { type: 'error' });
	}
};
