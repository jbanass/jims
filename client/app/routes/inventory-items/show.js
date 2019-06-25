import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model(params) {
    return RSVP.hash({
      companies: this.store.findAll("company"),
      inventory_types: this.store.findAll("inventory-type"),
      inventory_item: this.store.findRecord("inventory-item", params.id)
    });
  },
  setupController(controller, models) {
    controller.set("companies", models.companies);
    controller.set("inventory_types", models.inventory_types);
    controller.set("inventory_item", models.inventory_item);
  }
});
