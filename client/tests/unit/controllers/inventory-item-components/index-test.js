import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | inventory-item-components/index', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:inventory-item-components/index');
    assert.ok(controller);
  });
});
