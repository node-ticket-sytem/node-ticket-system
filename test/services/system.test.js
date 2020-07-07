const assert = require('assert');
const app = require('../../src/app');

describe('\'system\' service', () => {
  it('registered the service', () => {
    const service = app.service('system');

    assert.ok(service, 'Registered the service');
  });
});
