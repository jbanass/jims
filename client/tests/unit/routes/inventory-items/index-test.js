import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | inventory-items/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:inventory-items/index');
    assert.ok(route);
  });
});
