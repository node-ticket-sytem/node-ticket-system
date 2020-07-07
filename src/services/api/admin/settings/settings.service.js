// Initializes the `api/admin/settings` service on path `/api/admin/settings`
const { Settings } = require('./settings.class');
const hooks = require('./settings.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/admin/settings', new Settings(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/admin/settings');

  service.hooks(hooks);
};
