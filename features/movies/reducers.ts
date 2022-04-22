import * as types from './types';

const initialState: types.MoviesState = {
    data: [],
    isLoading: false,
    error: ''
};

const reducer = (state = initialState, action: types.MoviesActionTypes) => {
    switch (action.type) {
    case types.GET_MOVIES: {
        return {
            ...state,
            isLoading: true
        };
    }
    case types.GET_MOVIES_SUCCESS: {
        return {
            ...state,
            isLoading: false,
            data: action.payload.data,
        };
    }
    case types.GET_MOVIES_FAILURE: {
        return {
            ...state,
            isLoading: false,
            error: action.payload.error
        };
    }
    default:
        return state;
    }
};

export {reducer};
