import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    back() {
      this.inventory_type.rollbackAttributes();
      this.transitionToRoute("inventory-types");
    },
    cancel() {
      this.inventory_type.rollbackAttributes();
      this.transitionToRoute("inventory-types");
    },
    selectCompany(value) {
      this.store.findRecord("company", value).then(data => {
        this.inventory_type.set("company", data);
      });
    },
    save() {
      self = this;
      this.inventory_type
        .save()
        .then(function(success) {
          self.transitionToRoute(
            "inventory-types.show",
            self.inventory_type.id
          );
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
