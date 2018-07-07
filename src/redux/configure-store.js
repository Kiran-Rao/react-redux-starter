import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './rootReducer';
import DevTools from '../containers/DevTools';

const getMiddleware = () => {
  let middleware = [
    routerMiddleware(browserHistory),
    thunk
  ];

  if (__DEV__) {
    middleware = [...middleware];
  }

  return applyMiddleware(...middleware);
};

const getEnhancers = () => {
  let enhancers = [];

  if (__DEV__) {
    enhancers = [...enhancers, DevTools.instrument()];
  }

  return enhancers;
};

const enableHotLoader = (store) => {
  if (__DEV__ && module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer');
       store.replaceReducer(nextRootReducer);
    });
  }
};

const configureStore = initialState => {
  const store = compose(
    getMiddleware(),
    ...getEnhancers()
  )(createStore)(rootReducer, initialState);

  enableHotLoader(store);
  return store;
};


export default configureStore;
