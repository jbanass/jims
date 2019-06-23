import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    back(model) {
      this.model.rollbackAttributes();
      this.transitionToRoute("vendors");
    },
    cancel(model) {
      this.model.rollbackAttributes();
      this.transitionToRoute("vendors");
    },
    saveVendor(model) {
      self = this;
      model
        .save()
        .then(function(success) {
          self.transitionToRoute("vendors.show", model);
        })
        .catch(() => {
          console.log(model);
        });
    }
  }
});
