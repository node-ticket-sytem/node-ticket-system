const assert = require('assert');
const app = require('../../src/app');

describe('\'cmdb-class\' service', () => {
  it('registered the service', () => {
    const service = app.service('cmdb-class');

    assert.ok(service, 'Registered the service');
  });
});
