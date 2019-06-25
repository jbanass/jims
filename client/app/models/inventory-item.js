import DS from "ember-data";

export default DS.Model.extend({
  sku: DS.attr("string"),
  name: DS.attr("string"),
  description: DS.attr("string"),
  inventory_type: DS.belongsTo("inventory-type"),
  company: DS.belongsTo("company"),
  created: DS.attr("date"),
  modified: DS.attr("date")
});
