const { Service } = require('feathers-mongodb');

exports.Syslog = class Syslog extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('syslog');
    });
  }
};
