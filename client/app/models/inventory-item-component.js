import DS from "ember-data";

export default DS.Model.extend({
  material: DS.belongsTo("material"),
  inventory_item: DS.belongsTo("inventory-item"),
  vendor: DS.belongsTo("vendor"),
  company: DS.belongsTo("company"),
  quantity: DS.attr("number"),
  created: DS.attr("date"),
  modified: DS.attr("date")
});
