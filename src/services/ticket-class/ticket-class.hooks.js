const { authenticate } = require('@feathersjs/authentication').hooks;
const processRecord = require('../../hooks/process-record');

const populateChildClasses = require('../../hooks/populate-child-classes');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [
      processRecord()
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [populateChildClasses()],
    get: [populateChildClasses()],
    create: [
      processRecord()
    ],
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
