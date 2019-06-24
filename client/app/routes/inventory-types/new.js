import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model() {
    return RSVP.hash({
      companies: this.store.findAll("company"),
      inventory_type: this.store.createRecord("inventory-type", {
        name: "",
        description: "",
        company: this.store.peekAll("company").objectAt(0),
        color: ""
      })
    });
  },
  setupController(controller, models) {
    controller.set("companies", models.companies);
    controller.set("inventory_type", models.inventory_type);
  }
});
