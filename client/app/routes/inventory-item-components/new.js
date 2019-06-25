import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model() {
    return RSVP.hash({
      companies: this.store.findAll("company"),
      inventory_items: this.store.findAll("inventory-item"),
      materials: this.store.findAll("material"),
      vendors: this.store.findAll("vendor"),
      inventory_item_component: this.store.createRecord(
        "inventory-item-component",
        {
          material: null,
          inventory_item: null,
          vendor: null,
          company: null,
          quantity: 1
        }
      )
    });
  },
  setupController(controller, models) {
    let defCompany = models.companies.objectAt(0);
    let defMaterial = models.materials.objectAt(0);
    let defInventoryItem = models.inventory_items.objectAt(0);
    let defVendor = models.vendors.objectAt(0);

    models.inventory_item_component.set("material", defMaterial);
    models.inventory_item_component.set("inventory_item", defInventoryItem);
    models.inventory_item_component.set("vendor", defVendor);
    models.inventory_item_component.set("company", defCompany);

    controller.set("materials", models.materials);
    controller.set("inventory_items", models.inventory_items);
    controller.set("vendors", models.vendors);
    controller.set("companies", models.companies);
    controller.set("inventory_item_component", models.inventory_item_component);
  }
});
