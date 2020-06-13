import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducer from '../reducers';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const Home = loadable(() => import('./Home'));
const Posts = loadable(() => import('./Posts'));

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/posts" component={Posts} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
};

export default App;