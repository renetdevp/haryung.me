import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { h1 } from '../styles/Topbar.css';

const Topbar = () => {
    return (
        <Header className={h1}>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
        </Header>
    );
};

export default Topbar;
