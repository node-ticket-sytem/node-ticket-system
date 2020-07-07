const { Service } = require('feathers-mongodb');

exports.TicketClass = class TicketClass extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('ticket-class');
    });
  }
};
