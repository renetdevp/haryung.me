import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { h1 } from './Topbar.css';

const Topbar = () => {
    return (
        <Header as="h1" className={h1}>
            <Link to="/">
                Haryung.me
            </Link>
        </Header>
    )
};

export default Topbar;