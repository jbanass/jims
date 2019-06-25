import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model(params) {
    return RSVP.hash({
      companies: this.store.findAll("company"),
      vendors: this.store.findAll("vendor"),
      material: this.store.findRecord("material", params.id)
    });
  },
  setupController(controller, models) {
    controller.set("companies", models.companies);
    controller.set("vendors", models.vendors);
    controller.set("material", models.material);
  }
});
