import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model(params) {
    return RSVP.hash({
      companies: this.store.findAll("company"),
      vendor: this.store.findRecord("vendor", params.id)
    });
  },
  setupController(controller, models) {
    controller.set("companies", models.companies);
    controller.set("vendor", models.vendor);
  }
});
