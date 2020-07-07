const assert = require('assert');
const app = require('../../../../src/app');

describe('\'api/admin/users\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/admin/users');

    assert.ok(service, 'Registered the service');
  });
});
