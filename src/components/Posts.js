import React from 'react';
import loadable from '@loadable/component';

const Layout = loadable(() => import('./Layout'));

const Posts = ()=>{
    return (
        <Layout>
            <p>This is posts page</p>
        </Layout>
    )
};

export default Posts;