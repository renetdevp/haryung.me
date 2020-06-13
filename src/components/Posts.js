import React, { useEffect } from 'react';
import loadable from '@loadable/component';
import { useSelector, useDispatch } from 'react-redux';

import { getPostsList } from '../actions';

const Layout = loadable(() => import('./Layout'));

const Posts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsList());
    }, []); //  두 번째 인자인 배열에 변경될 시 effect를 재실행할 변수를 넣어주면 된다. ex) [props.freind.id]

    const PostsData = useSelector((state) => state.getPosts.posts, []) || [];
    
    return (
        <Layout>
            <p>This is posts page</p>
            {
                PostsData?`Posts alive`:'Posts dead'
                
            }
        </Layout>
    )
};

export default Posts;