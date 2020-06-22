import { combineReducers } from 'redux';

import GetPostsReducer from './reducerGetPosts';

const rootReducer = combineReducers({
    post: GetPostsReducer
});

export default rootReducer;