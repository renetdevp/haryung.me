import { all, fork, put, throttle, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
    GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL,
    ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAIL,
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAIL,
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
        const errmsg = err.response.data.msg;

        yield put({
            type: GET_USERS_FAIL,
            error: errmsg
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
        const { data } = yield call(addUserAPI, action.data);

        yield put({
            type: ADD_USER_SUCCESS,
            data: data
        });
    } catch (err) {
        const errmsg = err.response.data.msg;

        yield put({
            type: ADD_USER_FAIL,
            error: errmsg
        });
    }
}

function* watchAddUser() {
    yield takeLatest(ADD_USER_REQUEST, addUser);
}

function loginAPI(data) {
    return axios.post('/users/login', data);
}

function* login(action) {
    try {
        const { data } = yield call(loginAPI, action.data);

        yield put({
            type: LOG_IN_SUCCESS,
            data: data
        });
    } catch (err) {
        const errmsg = err.response.data.msg;

        yield put({
            type: LOG_IN_FAIL,
            error: errmsg
        });
    }
}

function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, login);
}

export default function* usersSaga() {
    yield all([
        fork(watchGetUsers),
        fork(watchAddUser),
        fork(watchLogin),
    ]);
};
