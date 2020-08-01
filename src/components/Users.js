import React from 'react';

import UsersList from '../containers/UsersList';

const Users = () => {
    return (
        <ul>
            <li>
                <p>Id</p>
                <p>Nick</p>
            </li>
            <UsersList />
        </ul>
    );
};

export default Users;
