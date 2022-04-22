export const GET_SEARCH_DATA_API = ({
                        search,
                    }: SearchAPIRequestParams) => {
    //TODO: Use from env file
    const REQUEST_URL = 'http://www.omdbapi.com/';
    const API_KEY = '67361726';

    return fetch(`${REQUEST_URL}?apikey=${API_KEY}&s=${search.toLowerCase()}`).then((response) => response.json());
};

export type SearchAPIRequestParams = {
    search: string;
}

export const GET_DETAILS_API = ({
                        id,
                    }: DetailsAPIRequestParams) => {
    //TODO: Use from env file
    const REQUEST_URL = 'http://www.omdbapi.com/';
    const API_KEY = '67361726';

    return fetch(`${REQUEST_URL}?apikey=${API_KEY}&i=${id.toLowerCase()}`).then((response) => response.json());
};

export type DetailsAPIRequestParams = {
    id: string;
}
