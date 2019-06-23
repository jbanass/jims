import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string"),
  company: DS.belongsTo("company"),
  url: DS.attr("string"),
  created: DS.attr("date"),
  modified: DS.attr("date")
});
