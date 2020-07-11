import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import AddPost from '../containers/AddPost';
import Posts from './Posts';
import Post from '../containers/Post';

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                <Route exact path="/" component={Home} />
                    <Route exact path="/posts/addpost" component={AddPost} />
                    <Route exact path="/posts" component={Posts} />
                    <Route path="/posts/:id" component={Post} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;