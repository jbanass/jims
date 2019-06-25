import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    back() {
      this.material.rollbackAttributes();
      this.transitionToRoute("materials");
    },
    cancel() {
      this.material.rollbackAttributes();
      this.transitionToRoute("materials");
    },
    selectCompany(value) {
      this.store.findRecord("company", value).then(data => {
        this.material.set("company", data);
      });
    },
    selectVendor(value) {
      this.store.findRecord("inventory-type", value).then(data => {
        this.material.set("vendor", data);
      });
    },
    save() {
      self = this;
      console.log(this.material);
      this.material
        .save()
        .then(function(success) {
          self.transitionToRoute("materials.show", self.material.id);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
