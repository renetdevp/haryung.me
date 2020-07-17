import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
    ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAIL,
} from '../reducers/usersReducer';

function addUserAPI(userData) {
    return axios.post('/users', userData);
}

function* addUser(action) {
    try {
        const result = yield call(addUserAPI, action.data);

        yield put({
            type: ADD_USER_SUCCESS,
            data: result.data
        });
    } catch (err) {
        yield put({
            type: ADD_USER_FAIL,
            error: err
        });
    }
}

function* watchAddUser() {
    yield takeLatest(ADD_USER_REQUEST, addUser);
}

export default function* usersSaga() {
    yield all([
        fork(watchAddUser),
    ]);
};