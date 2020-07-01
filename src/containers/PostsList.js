import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GET_POSTS_REQUEST } from '../reducers/postsReducer';

const PostsList = () => {
    useEffect(() => {
        dispatch({
            type: GET_POSTS_REQUEST
        });
    }, []); //  변경될 시 effect를 재실행할 변수를 두 번째 인자인 배열에 넣어주면 된다. ex) [props.freind.id]

    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.post, []) || [];
    const { getPostsErrmsg } = useSelector((state) => state.post, []) || '';

    return (
        <div className="PostsList">
            {
                getPostsErrmsg === ''?
                posts && posts.map((e, i) => (
                    <div key={i}>{`Title: ${e.title}, Content: ${e.content}`}</div>
                ))  //  div를 return 하는 것을 기억할 것, 함수 내에 스크립트로 쓰는줄 알고 삽질함 ㅡㅡ
                :'error'
            }
        </div>
    )
};

export default PostsList;