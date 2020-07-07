const { Service } = require('feathers-mongodb');

exports.Groups = class Groups extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('groups');
    });
  }
};
