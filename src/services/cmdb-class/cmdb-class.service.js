// Initializes the `cmdb-class` service on path `/cmdb-class`
const { CmdbClass } = require('./cmdb-class.class');
const createModel = require('../../models/cmdb-class.model');
const hooks = require('./cmdb-class.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/cmdb-class', new CmdbClass(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cmdb-class');

  service.hooks(hooks);
};
