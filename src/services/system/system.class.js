const { Service } = require('feathers-mongodb');

exports.System = class System extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('system');
    });
  }
};
