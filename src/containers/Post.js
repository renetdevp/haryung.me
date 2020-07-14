import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

import { GET_POST_REQUEST } from '../reducers/postsReducer';

const Post = () => {
    const dispatch = useDispatch();
    const { post, getPostErrmsg } = useSelector((state) => state.post, []);
    const { id } = useParams();

    useEffect(() => {
        dispatch({
            type: GET_POST_REQUEST,
            data: id
        });
    }, []);

    return (
        <div className="Post">
            {
                getPostErrmsg === ''?
                (
                    <div>
                        <h1>{post.title}</h1>
                        <Divider />
                        {post.content}
                    </div>
                )
                :'error'
            }
        </div>
    );
};

export default Post;