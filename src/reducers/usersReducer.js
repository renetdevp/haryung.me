import produce from 'immer';

export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAIL = 'ADD_USER_FAIL';

const initialState = {
    isAddingUser: false,
    userAdded: false,
    addUserErrmsg: ''
};

const usersReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
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