import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | inventorytype', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:inventorytype');
    assert.ok(adapter);
  });
});
