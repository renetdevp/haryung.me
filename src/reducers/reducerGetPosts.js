import { GET_POSTS_LIST } from '../actions';

const reducerGetPosts = (state = [], action) => {
    switch (action.type){
        case GET_POSTS_LIST:
            return {
                ...state,
                posts: action.data
            };
        default:
            return state;
    }
};

export default reducerGetPosts;