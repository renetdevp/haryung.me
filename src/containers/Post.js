import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// import { GET_POST_REQUEST } from '../reducers/postsReducer';

const Post = () => {
    const dispatch = useDispatch();
    const { post, getPostErrmsg } = useSelector((state) => state.post, []);
    const { id } = useParams();

    useEffect(() => {
        console.log(id);

        // dispatch({
        //     type: GET_POST_REQUEST,
        //     data: id
        // });
    }, []);

    return (
        <div className="Post">
            {
                getPostErrmsg === ''?
                post && `Title: ${post.title}, Content: ${post.content}`
                :'error'
            }
        </div>
    );
};

export default Post;