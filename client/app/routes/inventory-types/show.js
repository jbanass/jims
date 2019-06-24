import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model(params) {
    return RSVP.hash({
      companies: this.store.findAll("company"),
      inventory_type: this.store.findRecord("inventory-type", params.id)
    });
  },
  setupController(controller, models) {
    controller.set("companies", models.companies);
    controller.set("inventory_type", models.inventory_type);
  }
});
