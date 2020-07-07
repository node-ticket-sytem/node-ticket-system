const assert = require('assert');
const app = require('../../../../src/app');

describe('\'api/itsm/task\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/itsm/task');

    assert.ok(service, 'Registered the service');
  });
});
