import produce from 'immer';

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';
export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAIL = 'ADD_USER_FAIL';

const initialState = {
    users: [
        {
            "id": "this is intialState",
            "nickname": "this is intialState",
            "_id": "abcde12345"
        }
    ],
    isGettingUsers: false,
    usersGetted: false,
    getUsersErrmsg: '',
    isAddingUser: false,
    userAdded: false,
    addUserErrmsg: ''
};

const usersReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case GET_USERS_REQUEST:
                draft.isGettingUsers = true;
                draft.usersGetted = false;
                break;
            case GET_USERS_SUCCESS:
                draft.isGettingUsers = false;
                draft.users = action.data;
                draft.usersGetted = true;
                break;
            case GET_USERS_FAIL:
                draft.isGettingUsers = false;
                draft.getUsersErrmsg = action.error;
                break;
            case ADD_USER_REQUEST:
                draft.isAddingUser = true;
                draft.userAdded = false;
                break;
            case ADD_USER_SUCCESS:
                draft.isAddingUser = false;
                draft.userAdded = true;
                break;
            case ADD_USER_FAIL:
                draft.isAddingUser = false;
                draft.addUserErrmsg = action.error;
                break;
            default:
                break;
        }
    });
};

export default usersReducer;