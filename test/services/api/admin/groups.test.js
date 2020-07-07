const assert = require('assert');
const app = require('../../../../src/app');

describe('\'api/admin/groups\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/admin/groups');

    assert.ok(service, 'Registered the service');
  });
});
