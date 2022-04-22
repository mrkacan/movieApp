import { addOrRemove } from '../../utils';
import * as types from './types';
import {FavoritesState} from "./types";

const initialState: types.FavoritesState = {
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
        return {
            isLoading: false,
            data: action.payload
        };
    }
    default:
        return state;
    }
};

export {reducer};
