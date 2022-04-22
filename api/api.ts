export const API = ({
                        search,
                    }: RequestParams) => {
    //TODO: Use from env file
    const REQUEST_URL = 'http://www.omdbapi.com/';
    const API_KEY = '67361726';

    return fetch(`${REQUEST_URL}?apikey=${API_KEY}&s=${search.toLowerCase()}`).then((response) => response.json());
};

export type RequestParams = {
    search: string;
}
