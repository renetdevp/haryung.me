import produce from 'immer';

//  action type names
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL';
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAIL = 'ADD_POST_FAIL';
export const GET_POST_REQUEST = 'GET_POST_REQUEST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAIL = 'GET_POST_FAIL';

const initialState = {
    posts: [
        {
            "title": "this is initialState",
            "_id": "abcde12345"
        }
    ],
    isGettingPosts: false,
    postsGetted: false,
    getPostsErrmsg: '',
    isAddingPost: false,
    postAdded: false,
    addPostErrmsg: '',
    post: {},
    isGettingPost: false,
    postGetted: false,
    getPostErrmsg: ''
};

const postsReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case GET_POSTS_REQUEST:
                draft.isGettingPosts = true;
                draft.postGetted = false;
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
            case ADD_POST_REQUEST:
                draft.isAddingPost = true;
                draft.postAdded = false;
                break;
            case ADD_POST_SUCCESS:
                draft.isAddingPost = false;
                draft.postAdded = true;
                break;
            case ADD_POST_FAIL:
                draft.isAddingPost = false;
                draft.addPostErrmsg = action.error;
                break;
            case GET_POST_REQUEST:
                draft.isGettingPost = true;
                draft.postGetted = false;
                break;
            case GET_POST_SUCCESS:
                draft.isGettingPost = false;
                draft.post = action.data;
                draft.postGetted = true;
                break;
            case GET_POST_FAIL:
                draft.isGettingPost = false;
                draft.getPostErrmsg = action.error;
                break;
            default:
                break;
        }
    });
};

export default postsReducer;