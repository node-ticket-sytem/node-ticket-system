// Initializes the `record-class` service on path `/record-class`
const { RecordClass } = require('./record-class.class');
const hooks = require('./record-class.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/record-class', new RecordClass(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('record-class');

  service.hooks(hooks);
};
