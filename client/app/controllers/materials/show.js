import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    back() {
      this.material.rollbackAttributes();
      this.transitionToRoute("materials");
    },
    delete() {
      let self = this;
      this.material.destroyRecord().then(
        function() {
          self.transitionToRoute("materials");
        },
        function(error) {
          alert(error);
          this.material.rollbackAttributes();
        }
      );
    },
    edit() {
      this.material.set("isEditing", true);
    },
    cancel() {
      this.material.set("isEditing", false);
      this.material.rollbackAttributes();
    },
    selectCompany(value) {
      this.store.findRecord("company", value).then(data => {
        this.material.set("company", data);
      });
    },
    selectVendor(value) {
      this.store.findRecord("vendor", value).then(data => {
        this.material.set("vendor", data);
      });
    },
    save() {
      self = this;
      this.material.save().then(() => {
        this.material.set("isEditing", false);
      });
    }
  }
});
