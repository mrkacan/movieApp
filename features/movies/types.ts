import {Action} from 'redux';

const GET_MOVIES = 'GET_MOVIES';
const GET_MOVIES_SUCCESS =  'GET_MOVIES_SUCCESS';
const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';

interface GetMoviesAction extends Action {
    type: typeof GET_MOVIES;
    payload: string
}

interface GetMoviesSuccessAction extends Action {
    type: typeof GET_MOVIES_SUCCESS;
    payload: {
        data: MovieItem[];
    };
}

interface GetMoviesErrorAction extends Action {
    type: typeof GET_MOVIES_FAILURE;
    payload: {
        error: string;
    };
}

export type MoviesActionTypes =
    | GetMoviesAction
    | GetMoviesSuccessAction
    | GetMoviesErrorAction

export type MoviesState = {
    data: MovieItem[];
    isLoading: boolean;
    error: string;
}

export interface MovieItem {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
    imdbRating: string;
}

export type MoviesAPIResponse = {
    Response: "True" | "False";
    Search: MovieItem[];
    totalResults: string
}

export {
    GET_MOVIES,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAILURE,
};
