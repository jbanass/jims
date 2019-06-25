import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | materials/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:materials/index');
    assert.ok(route);
  });
});
