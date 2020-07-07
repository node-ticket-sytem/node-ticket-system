// Initializes the `ticket-class-fields` service on path `/ticket-class-fields`
const { TicketClassFields } = require('./ticket-class-fields.class');
const hooks = require('./ticket-class-fields.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ticket-class-fields', new TicketClassFields(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ticket-class-fields');

  service.hooks(hooks);
};
