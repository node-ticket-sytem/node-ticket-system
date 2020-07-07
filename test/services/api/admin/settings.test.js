const assert = require('assert');
const app = require('../../../../src/app');

describe('\'api/admin/settings\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/admin/settings');

    assert.ok(service, 'Registered the service');
  });
});
