import test from 'ava';
import request from 'supertest';
import express from 'express';

import api from './api.router';

test.beforeEach(t => {
  const app = express();
  app.use('/api', api);
  t.context.app = app;
});

test.cb('get', t => {
  request(t.context.app)
    .get('/api')
    .end((err, res) => {
      t.falsy(err);
      t.is(res.status, 200);
      t.is(res.body.status, 'ok');
      t.end();
    });
});

test.cb('post', t => {
  request(t.context.app)
    .post('/api')
    .end((err, res) => {
      t.falsy(err);
      t.is(res.status, 200);
      t.is(res.body.status, 'ok');
      t.end();
    });
});
