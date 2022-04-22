import * as types from "./types";

export const getMoviesSelector = ({movies}: { movies: types.MoviesState }) => ({
    data: movies.data,
    isLoading: movies.isLoading
})
