// Initializes the `api/admin/users` service on path `/api/admin/users`
const { Users } = require('./users.class');
const hooks = require('./users.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/admin/users', new Users(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/admin/users');

  service.hooks(hooks);
};
