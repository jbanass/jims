import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    back() {
      this.vendor.rollbackAttributes();
      this.transitionToRoute("vendors");
    },
    cancel() {
      this.vendor.rollbackAttributes();
      this.transitionToRoute("vendors");
    },
    selectCompany(value) {
      this.store.findRecord("company", value).then(data => {
        this.vendor.set("company", data);
      });
    },
    save() {
      self = this;
      this.vendor
        .save()
        .then(function(success) {
          self.transitionToRoute("vendors.show", self.vendor.id);
        })
        .catch(() => {
          console.log(model);
        });
    }
  }
});
