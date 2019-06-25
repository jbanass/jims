import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    back() {
      this.inventory_item.rollbackAttributes();
      this.transitionToRoute("inventory-items");
    },
    cancel() {
      this.inventory_item.rollbackAttributes();
      this.transitionToRoute("inventory-items");
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
      console.log(this.inventory_item);
      this.inventory_item
        .save()
        .then(function(success) {
          self.transitionToRoute(
            "inventory-items.show",
            self.inventory_item.id
          );
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
