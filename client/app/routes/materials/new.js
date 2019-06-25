import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model() {
    return RSVP.hash({
      companies: this.store.findAll("company"),
      vendors: this.store.findAll("vendor"),
      material: this.store.createRecord("material", {
        vendor_sku: "",
        vendor: null,
        company: null
      })
    });
  },
  setupController(controller, models) {
    let defCompany = models.companies.objectAt(0);
    let defVendor = models.vendors.objectAt(0);
    models.material.set("company", defCompany);
    models.material.set("vendor", defVendor);

    controller.set("companies", models.companies);
    controller.set("vendors", models.vendors);
    controller.set("material", models.material);
  }
});
