import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    back() {
      this.inventory_item_component.rollbackAttributes();
      this.transitionToRoute("inventory-item-components");
    },
    delete() {
      let self = this;
      this.inventory_item_component.destroyRecord().then(
        function() {
          self.transitionToRoute("inventory-item-components");
        },
        function(error) {
          alert(error);
          this.inventory_item_component.rollbackAttributes();
        }
      );
    },
    edit() {
      this.inventory_item_component.set("isEditing", true);
    },
    cancel() {
      this.inventory_item_component.set("isEditing", false);
      this.inventory_item_component.rollbackAttributes();
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
      this.inventory_item_component.save().then(() => {
        this.inventory_item_component.set("isEditing", false);
      });
    }
  }
});
