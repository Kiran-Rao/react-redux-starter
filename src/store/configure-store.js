import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

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

  if (__DEV__ && window.devToolsExtension) {
    enhancers = [...enhancers, window.devToolsExtension()];
  }

  return enhancers;
};

const enableHotLoader = (store) => {
  if (__DEV__ && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
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
