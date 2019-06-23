import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | vendors/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:vendors/show');
    assert.ok(route);
  });
});
