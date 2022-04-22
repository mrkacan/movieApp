import {combineReducers} from 'redux';
import {reducer as gifsReducer} from './gifs/reducers';

const reducer = combineReducers({
    gifs: gifsReducer,
});

export {reducer};
