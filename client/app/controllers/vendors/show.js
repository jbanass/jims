import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    back() {
      this.vendor.rollbackAttributes();
      this.transitionToRoute("vendors");
    },
    delete() {
      let self = this;
      this.vendor.destroyRecord().then(
        function() {
          self.transitionToRoute("vendors");
        },
        function(error) {
          alert(error);
          this.vendor.rollbackAttributes();
        }
      );
    },
    selectCompany(value) {
      this.store.findRecord("company", value).then(data => {
        this.vendor.set("company", data);
      });
    },
    edit() {
      this.vendor.set("isEditing", true);
    },
    cancel() {
      this.vendor.set("isEditing", false);
      this.vendor.rollbackAttributes();
    },
    save() {
      this.vendor.save().then(() => {
        this.vendor.set("isEditing", false);
      });
    }
  }
});
