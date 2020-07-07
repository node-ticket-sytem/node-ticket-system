const assert = require('assert');
const app = require('../../src/app');

describe('\'deleted-records\' service', () => {
  it('registered the service', () => {
    const service = app.service('deleted-records');

    assert.ok(service, 'Registered the service');
  });
});
