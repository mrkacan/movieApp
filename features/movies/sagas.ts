import {call, put, takeEvery, select} from 'redux-saga/effects';
import {GET_GIFS,} from './types';
import {API} from '../../api';
import * as actions from './actions';

function* handler() {
    yield takeEvery(GET_GIFS, getAllImages);
}

function* getAllImages(action) {
    try {
        let query = action?.payload;
        const response = yield call(API, {query});
        const json = yield response.json();
        const transformedData = json.data.map((item) => item?.images?.original?.url);

        yield put(actions.getGifsSuccess(transformedData, json?.pagination?.offset + 10));
    } catch (error) {
        console.error(error);
    }
}

export {handler};
