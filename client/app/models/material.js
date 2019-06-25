import DS from "ember-data";

export default DS.Model.extend({
  vendor_sku: DS.attr("string"),
  vendor: DS.belongsTo("vendor"),
  company: DS.belongsTo("company"),
  created: DS.attr("date"),
  modified: DS.attr("date")
});
