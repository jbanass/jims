import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model() {
    return RSVP.hash({
      companies: this.store.findAll("company"),
      inventory_types: this.store.findAll("inventory-type"),
      inventory_item: this.store.createRecord("inventory-item", {
        sku: "",
        name: "",
        description: "",
        company: null,
        inventory_type: null
      })
    });
  },
  setupController(controller, models) {
    let defCompany = models.companies.objectAt(0);
    let defType = models.inventory_types.objectAt(0);
    models.inventory_item.set("company", defCompany);
    models.inventory_item.set("inventory_type", defType);
    controller.set("companies", models.companies);
    controller.set("inventory_types", models.inventory_types);
    controller.set("inventory_item", models.inventory_item);
  }
});
