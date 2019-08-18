import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import './index.css';
import App from './App';
import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';
import configureStore, { history } from './store'

const store = configureStore(history);

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/login" component={Login} />
                <PrivateRoute path="/" component={App} />
            </Switch>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));