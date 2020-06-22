import { GET_POSTS_LIST } from '../actions';

const initialState = {
    posts: [
        {
            "title": "this is",
            "content": "initialState"
        }
    ]
};

const reducerGetPosts = (state = initialState, action) => {
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