import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  color: DS.attr("string"),
  company: DS.belongsTo("company"),
  created: DS.attr("date"),
  modified: DS.attr("date")
});
