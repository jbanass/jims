import DS from "ember-data";

export default DS.Model.extend({
  id: DS.attr(),
  name: DS.attr("string"),
  street: DS.attr("string"),
  city: DS.attr("string"),
  state: DS.attr("string"),
  postal: DS.attr("number"),
  image: DS.attr("string"),
  site: DS.attr("string"),
  created: DS.attr("date"),
  modified: DS.attr("date")
});
