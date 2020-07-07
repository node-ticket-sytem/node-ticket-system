// Initializes the `api/admin/groups` service on path `/api/admin/groups`
const { Groups } = require('./groups.class');
const hooks = require('./groups.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/admin/groups', new Groups(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/admin/groups');

  service.hooks(hooks);
};
