import React, { useEffect } from 'react';
import loadable from '@loadable/component';

import PostsList from '../containers/PostsList';

const Layout = loadable(() => import('./Layout'));

const Posts = () => {
    return (
        <Layout>
            <p>This is posts page</p>
            <PostsList />
        </Layout>
    )
};

export default Posts;