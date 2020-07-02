import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import Posts from './Posts';
import AddPost from './AddPost';

const App = () => {
    return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/posts/addpost" component={AddPost} />
                        <Route exact path="/posts" component={Posts} />
                    </Switch>
                </Layout>
            </Router>
    );
};

export default App;