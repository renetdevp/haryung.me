import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GET_USERS_REQUEST } from '../reducers/usersReducer';
import '../styles/UsersList.css';
import { userId, userNick } from '../styles/UsersList.css';

const UsersList = () => {
    const dispatch = useDispatch();
    const { users, getUsersErrmsg } = useSelector((state) => state.user, []);

    useEffect(() => {
        dispatch({
            type: GET_USERS_REQUEST
        });
    }, []);
    
    return (
        <div className="UsersList">
            {
                getUsersErrmsg === ''?
                users && users.map((e, i) => (
                    <li key={i}>
                        <p className={userId}>{e.id}</p>
                        <p className={userNick}>{e.nickname}</p>
                    </li>
                ))
                :'error'
            }
        </div>
    );
};

export default UsersList;