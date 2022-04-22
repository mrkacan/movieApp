import * as types from './types';

const getGifs = (searchText: string): types.GifsActionTypes => {
    return {
        type: types.GET_GIFS,
        payload: searchText,
    };
};

const getGifsSuccess = (data: string[], offset:number): types.GifsActionTypes => {
    return {
        type: types.GET_GIFS_SUCCESS,
        payload: {
            data,
            offset
        },
    };
};

export {
    getGifs,
    getGifsSuccess
};
