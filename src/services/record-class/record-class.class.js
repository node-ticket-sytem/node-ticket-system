const { Service } = require('feathers-mongodb');

exports.RecordClass = class RecordClass extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('record-class');
    });
  }
};
