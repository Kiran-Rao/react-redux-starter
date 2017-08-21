import 'es5-shim';
import 'es6-shim';
import 'es6-promise';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import configureStore from './redux/configure-store';
import DevTools from './containers/DevTools';
import './styles/index.css';

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

const devTools = __DEV__ ? <DevTools store={ store } /> : undefined;

const app = (
  <div>
    { devTools }
    <Provider store={ store }>
      <Router history={ history }>
        { routes }
      </Router>
    </Provider>
  </div>
);

if (!__TEST__) {
  ReactDOM.render(app, document.getElementById('root'));
}
