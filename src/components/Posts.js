import React from 'react';

import PostsList from '../containers/PostsList';
import { tableHeader, postTitle, postId } from '../styles/PostsList.css';

const Posts = () => {
    return (
        <ul>
            <li className={tableHeader}>
                <p className={postTitle}>Title</p>
                <p className={postId}>Id</p>
            </li>
            <PostsList />
        </ul>
    );
};

export default Posts;