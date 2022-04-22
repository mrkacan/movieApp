import * as moviesTypes from "./types";
import * as userDataTypes from "../userData/types";

export const getMoviesSelector = ({movies, userData}: {
    movies: moviesTypes.MoviesState,
    userData: userDataTypes.UserDataState
}) => {
    const newData = movies.data.filter(item => userData.hiddenItems.findIndex(hiddenItem => item.imdbID === hiddenItem.imdbID) === -1)

    return {
        data: newData,
        isLoading: movies.isLoading,
        error: movies.error
    }
}
