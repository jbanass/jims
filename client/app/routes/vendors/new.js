import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return this.store.findAll("company").then(array => {
      let company = array.objectAt(0);
      console.log(company);
      return this.store.createRecord("vendor", {
        name: "",
        company: company,
        url: ""
      });
    });
  }
});
