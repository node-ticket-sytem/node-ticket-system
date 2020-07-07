const { Service } = require('feathers-mongodb');

exports.TicketClassFields = class TicketClassFields extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('ticket-class-fields');
    });
  }
};
