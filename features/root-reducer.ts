import {combineReducers} from 'redux';
import {reducer as moviesReducer} from './movies/reducers';
import {reducer as userData} from './userData/reducers';

const reducer = combineReducers({
    movies: moviesReducer,
    userData: userData
});

export {reducer};
