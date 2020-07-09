import { all, fork, put, throttle, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
    GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAIL,
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAIL,
    GET_POST_REQUEST, GET_POST_SUCCESS, GET_POST_FAIL,
} from '../reducers/postsReducer';

function getPostsAPI() {
    return axios.get('/posts');
}

function* getPosts(action) {
    try {
        const { data } = yield call(getPostsAPI);

        yield put({
            type: GET_POSTS_SUCCESS,
            data: data.posts
        });
    } catch (err) {
        yield put({
            type: GET_POSTS_FAIL,
            error: err
        });
    }
}

function* watchGetPosts() {
    yield throttle(2000, GET_POSTS_REQUEST, getPosts);
}

function addPostAPI(postData) {
    return axios.post('/posts', postData, {
        withCredentials: true
    });
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);

        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data
        });
    } catch (err) {
        yield put({
            type: ADD_POST_FAIL,
            error: err
        });
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function getPostAPI(postId) {
    return axios.get(`/posts/${postId}`);
}

function* getPost(action) {
    try {
        const { data } = yield call(getPostAPI, action.data);

        yield put({
            type: GET_POST_SUCCESS,
            data: data.post
        });
    } catch (err) {
        yield put({
            type: GET_POST_FAIL,
            error: err
        });
    }
}

function* watchGetPost() {
    yield throttle(2000, GET_POST_REQUEST, getPost);
}

export default function* postsSaga() {
    yield all([
        fork(watchGetPosts),
        fork(watchAddPost),
        fork(watchGetPost),
    ]);
};