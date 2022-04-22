import * as types from './types';
import {MovieItem} from "./types";

const getMovies = (searchText: string): types.MoviesActionTypes => {
    return {
        type: types.GET_MOVIES,
        payload: searchText,
    };
};

const getMoviesSuccess = (data: MovieItem[]): types.MoviesActionTypes => {
    return {
        type: types.GET_MOVIES_SUCCESS,
        payload: {
            data,
        },
    };
};
const getMovieError = (error: string): types.MoviesActionTypes => {
    return {
        type: types.GET_MOVIES_FAILURE,
        payload: {
            error,
        },
    };
};

export {
    getMovies,
    getMoviesSuccess
};
