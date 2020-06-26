import { all, fork, put, throttle, call } from 'redux-saga/effects';
import axios from 'axios';

import {
    GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAIL
} from '../reducers/postsReducer';

function getPostsAPI() {
    return axios.get('http://haryung.me:1234/posts');
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

export default function* postsSaga() {
    yield all([
        fork(watchGetPosts),
    ]);
};