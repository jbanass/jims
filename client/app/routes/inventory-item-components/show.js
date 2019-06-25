import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model(params) {
    return RSVP.hash({
      companies: this.store.findAll("company"),
      inventory_items: this.store.findAll("inventory-item"),
      materials: this.store.findAll("material"),
      vendors: this.store.findAll("vendor"),
      inventory_item_component: this.store.findRecord(
        "inventory-item-component",
        params.id
      )
    });
  },
  setupController(controller, models) {
    controller.set("materials", models.materials);
    controller.set("inventory_items", models.inventory_items);
    controller.set("vendors", models.vendors);
    controller.set("companies", models.companies);
    controller.set("inventory_item_component", models.inventory_item_component);
  }
});
