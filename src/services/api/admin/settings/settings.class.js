const { Service } = require('feathers-mongodb');

exports.Settings = class Settings extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('settings');
    });
  }
};
