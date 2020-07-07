const assert = require('assert');
const app = require('../../../../src/app');

describe('\'api/admin/roles\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/admin/roles');

    assert.ok(service, 'Registered the service');
  });
});
