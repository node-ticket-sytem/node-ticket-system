// Initializes the `ticket-class` service on path `/ticket-class`
const { TicketClass } = require('./ticket-class.class');
const hooks = require('./ticket-class.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ticket-class', new TicketClass(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ticket-class');

  service.hooks(hooks);
};
