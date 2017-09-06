import { INCREMENT_COUNTER, DECREMENT_COUNTER, SET_MESSAGE } from './constants';
import { get } from '../../services/request';

export const increment = () => ({
  type: INCREMENT_COUNTER
});

export const decrement = () => ({
  type: DECREMENT_COUNTER
});

export const setMessage = message => ({
  type: SET_MESSAGE,
  payload: message
});

export const pingApi = () => dispatch => {
  get('/').then(res => {
    dispatch(setMessage(res.status));
  }).catch(() => {
    dispatch(setMessage('Error'));
  });
};
