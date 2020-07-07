const { Service } = require('feathers-mongodb');

exports.Roles = class Roles extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('roles');
    });
  }
};
