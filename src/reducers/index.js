import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    post: postsReducer,
    user: usersReducer,
});

export default rootReducer;