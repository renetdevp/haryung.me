import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

import App from './components/App';

const mount = document.getElementById('root');

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        mount
    );
};

render(App);

if (module.hot) module.hot.accept('./components/App', () => { render(App); });