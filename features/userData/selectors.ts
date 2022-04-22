import * as types from "./types";

export const getFavoriteItems = ({userData}: { userData: types.UserDataState }) => userData.favoriteItems
