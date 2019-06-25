import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    back() {
      this.inventory_item_component.rollbackAttributes();
      this.transitionToRoute("inventory-item-components");
    },
    cancel() {
      this.inventory_item_component.rollbackAttributes();
      this.transitionToRoute("inventory-item-components");
    },
    selectMaterial(value) {
      this.store.findRecord("material", value).then(data => {
        this.inventory_item_component.set("material", data);
      });
    },
    selectInventoryItem(value) {
      this.store.findRecord("inventory-item", value).then(data => {
        this.inventory_item_component.set("inventory_item", data);
      });
    },
    selectVendor(value) {
      this.store.findRecord("vendor", value).then(data => {
        this.inventory_item_component.set("vendor", data);
      });
    },
    selectCompany(value) {
      this.store.findRecord("company", value).then(data => {
        this.inventory_item_component.set("company", data);
      });
    },
    save() {
      self = this;
      console.log(this.inventory_item_component);
      this.inventory_item_component
        .save()
        .then(function(success) {
          self.transitionToRoute(
            "inventory-item-components.show",
            self.inventory_item_component.id
          );
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
