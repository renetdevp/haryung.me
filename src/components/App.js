import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import('./Home'));
const Posts = loadable(() => import('./Posts'));

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/posts" component={Posts} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;