import React, { useEffect } from 'react';
import loadable from '@loadable/component';
import { useSelector, useDispatch } from 'react-redux';

import { postsAction } from '../actions';

const Layout = loadable(() => import('./Layout'));

const Posts = () => {
    useEffect(() => {
        dispatch(postsAction());
    }, []); //  변경될 시 effect를 재실행할 변수를 두 번째 인자인 배열에 넣어주면 된다. ex) [props.freind.id]

    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.getPosts, []) || [];

    return (
        <Layout>
            <p>This is posts page</p>
            {
                JSON.stringify(posts)
            }
        </Layout>
    )
};

export default Posts;