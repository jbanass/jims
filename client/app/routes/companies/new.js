import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return this.store.createRecord("company", {
      name: "",
      street: "",
      city: "",
      state: "",
      postal: "",
      image: "",
      site: ""
    });
  }
});
