import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from '../constants';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  count: 0
});

const counterReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {

  case INCREMENT_COUNTER:
    return state.update('count', (value) => value + 1);

  case DECREMENT_COUNTER:
    return state.update('count', (value) => value - 1);

  case RESET_COUNTER:
    return state.merge(INITIAL_STATE);

  default:
    return state;
  }
};

export default counterReducer;
