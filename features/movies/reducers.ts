import * as types from './types';

const initialState: types.GiftState = {
    data: [],
    offset: 0,
    isLoading: false,
    error: ''
};

const reducer = (state = initialState, action: types.GifsActionTypes) => {
    switch (action.type) {
    case types.GET_GIFS: {
        return {
            isLoading: true
        };
    }
    case types.GET_GIFS_SUCCESS: {
        return {
            isLoading: false,
            data: action.payload.data,
            offset: action.payload.offset
        };
    }
    case types.GET_GIFS_FAILURE: {
        return {
            isLoading: false,
            error: action.payload.error
        };
    }
    default:
        return state;
    }
};

export {reducer};
