// Initializes the `deleted-records` service on path `/deleted-records`
const { DeletedRecords } = require('./deleted-records.class');
const hooks = require('./deleted-records.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/deleted-records', new DeletedRecords(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('deleted-records');

  service.hooks(hooks);
};
