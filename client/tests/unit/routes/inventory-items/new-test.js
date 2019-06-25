import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | inventory-items/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:inventory-items/new');
    assert.ok(route);
  });
});
