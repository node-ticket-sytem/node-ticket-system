// Initializes the `system` service on path `/system`
const { System } = require('./system.class');
const hooks = require('./system.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/system', new System(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('system');

  service.hooks(hooks);
};
