const { Service } = require('feathers-mongodb');

exports.Task = class Task extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('task');
    });
  }
};
