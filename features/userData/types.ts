import {Action} from 'redux';
import {MovieItem} from "../movies/types";

const FAVORITE_TOGGLE = 'FAVORITE_TOGGLE';
const HIDE_TOGGLE =  'HIDE_TOGGLE';

interface ToggleFavoriteAction extends Action {
    type: typeof FAVORITE_TOGGLE;
    payload: MovieItem
}

interface ToggleHideAction extends Action {
    type: typeof HIDE_TOGGLE;
    payload: MovieItem
}


export type MoviesActionTypes =
    | ToggleFavoriteAction
    | ToggleHideAction

export type FavoritesState = {
    favoriteItems: MovieItem[],
    hiddenItems: MovieItem[]
}

export {
    FAVORITE_TOGGLE,
    HIDE_TOGGLE,
};
