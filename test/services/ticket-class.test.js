const assert = require('assert');
const app = require('../../src/app');

describe('\'ticket-class\' service', () => {
  it('registered the service', () => {
    const service = app.service('ticket-class');

    assert.ok(service, 'Registered the service');
  });
});
