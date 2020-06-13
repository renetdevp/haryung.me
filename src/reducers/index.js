import { combineReducers } from 'redux';

import GetPostsReducer from './reducerGetPosts';

const rootReducer = combineReducers({
    getPosts: GetPostsReducer
});

export default rootReducer;