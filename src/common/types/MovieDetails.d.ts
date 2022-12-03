export interface IGenres {
	id?: number;
	name?: string;
}

export interface IProductionCompanies {
	id?: number;
	logo_path?: string;
	name?: string;
	origin_country?: string;
}

export interface IProductionCountries {
	iso_3166_1?: string;
	name?: string;
}

export interface ISpokenLanguage {
	english_name?: string;
	iso_639_1?: string;
	name?: string;
}

export interface IMovieDetails {
	adult?: boolean;
	backdrop_path?: string;
	belongs_to_collection?: Record<any, any>;
	budget?: number;
	genres?: IGenres[];
	homepage?: string;
	id?: number;
	imdb_id?: string;
	original_language?: string;
	original_title?: string;
	overview?: string;
	popularity?: number;
	poster_path?: string;
	production_companies: IProductionCompanies[];
	production_countries: IProductionCountries[];
	release_date?: string;
	revenue?: number;
	runtime?: number;
	spoken_languages?: ISpokenLanguage[];
	status?: string;
	tagline?: string;
	title?: string;
	video?: boolean;
	vote_average?: number;
	vote_count?: number;
}

export interface ICast {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string;
	cast_id: number;
	character: string;
	credit_id: string;
	order: number;
}

export interface IMovieFullDetail {
	casts: ICast[];
	details: IMovieDetails;
}
