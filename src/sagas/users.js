import { all, fork, put, throttle, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
    GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL,
    ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAIL,
} from '../reducers/usersReducer';

function getUsersAPI() {
    return axios.get('/users');
}

function* getUsers(action) {
    try {
        const { data } = yield call(getUsersAPI);
        
        yield put({
            type: GET_USERS_SUCCESS,
            data: data.users
        });
    } catch (err) {
        yield put({
            type: GET_USERS_FAIL,
            error: err
        });
    }
}

function* watchGetUsers() {
    yield throttle(2000, GET_USERS_REQUEST, getUsers);
}

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
        fork(watchGetUsers),
        fork(watchAddUser),
    ]);
};