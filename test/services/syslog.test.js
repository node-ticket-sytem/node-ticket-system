const assert = require('assert');
const app = require('../../src/app');

describe('\'syslog\' service', () => {
  it('registered the service', () => {
    const service = app.service('syslog');

    assert.ok(service, 'Registered the service');
  });
});
