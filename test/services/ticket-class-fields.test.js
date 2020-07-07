const assert = require('assert');
const app = require('../../src/app');

describe('\'ticket-class-fields\' service', () => {
  it('registered the service', () => {
    const service = app.service('ticket-class-fields');

    assert.ok(service, 'Registered the service');
  });
});
