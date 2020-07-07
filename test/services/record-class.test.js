const assert = require('assert');
const app = require('../../src/app');

describe('\'record-class\' service', () => {
  it('registered the service', () => {
    const service = app.service('record-class');

    assert.ok(service, 'Registered the service');
  });
});
