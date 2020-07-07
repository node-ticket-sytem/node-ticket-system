// Initializes the `api/admin/roles` service on path `/api/admin/roles`
const { Roles } = require('./roles.class');
const hooks = require('./roles.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/admin/roles', new Roles(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/admin/roles');

  service.hooks(hooks);
};
