import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    back() {
      this.inventory_type.rollbackAttributes();
      this.transitionToRoute("inventory-types");
    },
    delete() {
      let self = this;
      this.inventory_type.destroyRecord().then(
        function() {
          self.transitionToRoute("inventory-types");
        },
        function(error) {
          alert(error);
          this.inventory_type.rollbackAttributes();
        }
      );
    },
    selectCompany(value) {
      this.store.findRecord("company", value).then(data => {
        this.inventory_type.set("company", data);
      });
    },
    edit() {
      this.inventory_type.set("isEditing", true);
    },
    cancel() {
      this.inventory_type.set("isEditing", false);
      this.inventory_type.rollbackAttributes();
    },
    save() {
      this.inventory_type.save().then(() => {
        this.inventory_type.set("isEditing", false);
      });
    }
  }
});
