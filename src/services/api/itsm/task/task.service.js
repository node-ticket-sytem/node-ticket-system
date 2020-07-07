// Initializes the `api/itsm/task` service on path `/api/itsm/task`
const { Task } = require('./task.class');
const hooks = require('./task.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/itsm/task', new Task(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/itsm/task');

  service.hooks(hooks);
};
