import * as types from './types';
import {MovieItem} from "../movies/types";

const toggleFavorite = (movie: MovieItem): types.MoviesActionTypes => {
    return {
        type: types.FAVORITE_TOGGLE,
        payload: movie,
    };
};

const toggleHide = (movie: MovieItem): types.MoviesActionTypes => {
    return {
        type: types.HIDE_TOGGLE,
        payload: movie
    };
};

export {
    toggleFavorite,
    toggleHide
};
