import React from 'react';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import { pullRight } from './layout.css';
import Topbar from './Topbar';

const Layout = ({children}) => {
    return (
        <Container>
            <Topbar />
            <Divider />
            {children}
            <p className={pullRight}>
                Made by <Icon name="heart" color="red" /> renetdevp
            </p>
        </Container>
    );
};

export default Layout;