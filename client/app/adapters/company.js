import DS from "ember-data";

export default DS.JSONAPIAdapter.extend({
  namespace: "api/v1",
  handleResponse: function(status, headers, payload) {
    if (status === 400 && payload.errors) {
      return new DS.InvalidError(payload.errors);
    }
    return this._super(...arguments);
  }
});
