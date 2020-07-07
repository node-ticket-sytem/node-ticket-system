const { Service } = require('feathers-mongodb');

exports.Ticket = class Ticket extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('ticket');
    });
  }
};
