const { Service } = require('feathers-mongodb');

exports.DeletedRecords = class DeletedRecords extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('deleted-records');
    });
  }
};
