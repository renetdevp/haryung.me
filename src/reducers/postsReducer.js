import produce from 'immer';

//  action type names
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL';

const initialState = {
    posts: [
        {
            "title": "this is",
            "content": "initialState"
        }
    ],
    isGettingPosts: false,
    postsGetted: false,
    getPostsErrmsg: ''
};

const postsReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type){
            case GET_POSTS_REQUEST:
                draft.isGettingPosts = true;
                break;
            case GET_POSTS_SUCCESS:
                draft.isGettingPosts = false;
                draft.posts = action.data;
                draft.postsGetted = true;
                break;
            case GET_POSTS_FAIL:
                draft.isGettingPosts = false;
                draft.getPostsErrmsg = action.error;
                break;
            default:
                break;
        }
    });
};

export default postsReducer;