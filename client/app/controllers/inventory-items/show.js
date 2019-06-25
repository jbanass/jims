import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    back() {
      this.inventory_item.rollbackAttributes();
      this.transitionToRoute("inventory-items");
    },
    delete() {
      let self = this;
      this.inventory_item.destroyRecord().then(
        function() {
          self.transitionToRoute("inventory-items");
        },
        function(error) {
          alert(error);
          this.inventory_item.rollbackAttributes();
        }
      );
    },
    edit() {
      this.inventory_item.set("isEditing", true);
    },
    cancel() {
      this.inventory_item.set("isEditing", false);
      this.inventory_item.rollbackAttributes();
    },
    selectCompany(value) {
      this.store.findRecord("company", value).then(data => {
        this.inventory_item.set("company", data);
      });
    },
    selectInventoryType(value) {
      this.store.findRecord("inventory-type", value).then(data => {
        this.inventory_item.set("inventory_type", data);
      });
    },
    save() {
      self = this;
      this.inventory_item.save().then(() => {
        this.inventory_item.set("isEditing", false);
      });
    }
  }
});
