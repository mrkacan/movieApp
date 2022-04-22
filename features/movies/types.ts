import {Action} from 'redux';

const GET_GIFS = 'GET_GIFS';
const GET_GIFS_SUCCESS =  'GET_GIFS_SUCCESS';
const GET_GIFS_FAILURE = 'GET_GIFS_FAILURE';

interface GetGifsAction extends Action {
    type: typeof GET_GIFS;
    payload: {
        error: string;
    };
}

interface GetGifsSuccessAction extends Action {
    type: typeof GET_GIFS_SUCCESS;
    payload: {
        data: string[];
        offset: number;
    };
}

interface GetGifsErrorAction extends Action {
    type: typeof GET_GIFS_FAILURE;
    payload: {
        error: string;
    };
}

export type GifsActionTypes =
    | GetGifsAction
    | GetGifsSuccessAction
    | GetGifsErrorAction

export type GiftState = {
    data: Array;
    offset: number;
    isLoading: boolean;
    error: string;
}

export {
    GET_GIFS,
    GET_GIFS_SUCCESS,
    GET_GIFS_FAILURE,
};
