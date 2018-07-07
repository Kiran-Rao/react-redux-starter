/* eslint no-console: 0 */
import 'isomorphic-fetch';
import bluebird from 'bluebird';
import R from 'ramda';

if (!global.Promise) {
  global.Promise = bluebird;
}

const API_URL = '/api';
const defaultOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
       'Content-Type': 'application/json'
  }
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const parseJSON = (response) => {
  try {
    return response.json();
  } catch (e) {
    console.error('Fetch received non-json format response from the previous aync request');
    console.error(e);
    throw e;
  }
};

const request = (url, options) => {
  return bluebird.resolve(fetch(url, options))
    .then(checkStatus)
    .then(parseJSON);
};

export function get(endpoint, _options = {}) {
  const url = `${API_URL}${endpoint}`;
  const options = R.merge(defaultOptions, _options);

  return request(url, options);
}

export function post(endpoint, body, _options = {}) {
  const url = `${API_URL}${endpoint}`;

  const postOptions = {
    method: 'POST',
    body: JSON.stringify(body)
  };

  const options = R.mergeAll([
    defaultOptions,
    postOptions,
    _options
  ]);

  return request(url, options);
}
