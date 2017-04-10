const api = require('../api/api.router');

module.exports = (app) => {
  app.use('/api', api);
};
