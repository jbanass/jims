import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | inventory-types/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:inventory-types/show');
    assert.ok(route);
  });
});
