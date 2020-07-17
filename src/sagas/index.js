import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import posts from './posts';
import users from './users';

axios.defaults.baseURL = 'http://haryung.me:1234';

export default function* rootSaga() {
    yield all([
        fork(posts),
        fork(users),
    ]);
};