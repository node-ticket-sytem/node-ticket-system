// Initializes the `api/table` service on path `/api/table`
const { Table } = require('./table.class');
const hooks = require('./table.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/table', new Table(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/table');

  service.hooks(hooks);
};
