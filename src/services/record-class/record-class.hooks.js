const { authenticate } = require('@feathersjs/authentication').hooks;

const populateChildClasses = require('../../hooks/populate-child-classes');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [populateChildClasses()],
    get: [populateChildClasses()],
    create: [],
    update: [populateChildClasses()],
    patch: [populateChildClasses()],
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
