const assert = require('assert');
const app = require('../../../src/app');

describe('\'api/table\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/table');

    assert.ok(service, 'Registered the service');
  });
});
