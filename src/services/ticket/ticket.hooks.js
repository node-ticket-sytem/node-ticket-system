const { authenticate } = require('@feathersjs/authentication').hooks;

const processRecord = require('../../hooks/process-record');

module.exports = {
  before: {
    all: [
      authenticate('jwt'),
      
    ],
    find: [],
    get: [],
    create: [processRecord()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [processRecord()],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
