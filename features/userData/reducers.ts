import { addOrRemove } from '../../utils';
import * as types from './types';
import {UserDataState} from "./types";

const initialState: types.UserDataState = {
    favoriteItems: [],
    hiddenItems: []
};

const reducer = (state = initialState, action: types.MoviesActionTypes) => {
    switch (action.type) {
    case types.HIDE_TOGGLE: {
        const newHiddenItems = addOrRemove(state.hiddenItems, action.payload);

        return {
            ...state,
            hiddenItems: newHiddenItems
        };
    }
    case types.FAVORITE_TOGGLE: {
        const newUserDataItems = addOrRemove(state.favoriteItems, action.payload);

        return {
            ...state,
            favoriteItems: newUserDataItems
        };
    }
    default:
        return state;
    }
};

export {reducer};
