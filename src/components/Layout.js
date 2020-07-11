import React from 'react';
import { Container, Icon } from 'semantic-ui-react';

import { pullRight } from '../styles/layout.css';
import Topbar from './Topbar';

const Layout = ({children}) => {
    return (
        <Container>
            <Topbar />
            {children}
            <p className={pullRight}>
                Made by <Icon name="heart" color="red" /> renetdevp
            </p>
        </Container>
    );
};

export default Layout;