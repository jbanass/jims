import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model() {
    return RSVP.hash({
      companies: this.store.findAll("company"),
      vendor: this.store.createRecord("vendor", {
        name: "",
        company: this.store.peekAll("company").objectAt(0),
        url: ""
      })
    });
  },
  setupController(controller, models) {
    controller.set("companies", models.companies);
    controller.set("vendor", models.vendor);
  }
});
