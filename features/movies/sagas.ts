import {all, call, put, takeEvery} from 'redux-saga/effects';
import * as types from './types';
import {GET_MOVIES, MovieItem} from './types';
import {GET_DETAILS_API, GET_SEARCH_DATA_API} from '../../api/api';
import * as actions from './actions';

function* handler() {
    yield takeEvery(GET_MOVIES, getMovies);
}

function* getMovies(action: types.MoviesActionTypes) {
    try {
        let query = action?.payload;
        const response: types.MoviesAPIResponse = yield call(GET_SEARCH_DATA_API, {search: query});

        if(response.Response === "True"){
            const movieData: MovieItem[] = yield all(
                response?.Search.map(function* (movie) {
                    const id = movie?.imdbID;
                    const details = yield call(GET_DETAILS_API, {id})
                    return {
                        ...movie,
                        imdbRating: details.imdbRating
                    };
                }),
            );

            yield put(actions.getMoviesSuccess(movieData));
        } else {
            //TODO: Can put here error action
            yield put(actions.getMoviesSuccess([]));
        }

    } catch (error) {
        console.error(error);
    }
}

export {handler};
