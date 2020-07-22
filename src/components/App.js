import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import AddPost from '../containers/AddPost';
import Posts from './Posts';
import Post from '../containers/Post';
import AddUser from '../containers/AddUser';
import Users from './Users';

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                <Route exact path="/" component={Home} />
                    <Route exact path="/posts/addpost" component={AddPost} />
                    <Route exact path="/posts" component={Posts} />
                    <Route path="/posts/:id" component={Post} />
                    <Route exact path="/users/adduser" component={AddUser} />
                    <Route exact path="/users" component={Users} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;