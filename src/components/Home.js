import React from 'react';
import loadable from '@loadable/component';

const Layout = loadable(() => import('./Layout'));

const Home = () => {
    return (
        <Layout>
            <p>Welcome to hos</p>
        </Layout>
    )
};

export default Home;