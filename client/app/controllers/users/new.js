import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    back(model) {
      this.model.rollbackAttributes();
      this.transitionToRoute("users");
    },
    cancel(model) {
      this.model.rollbackAttributes();
      this.transitionToRoute("users");
    },
    saveUser(model) {
      self = this;
      model
        .save()
        .then(function(success) {
          self.transitionToRoute("users.show", model);
        })
        .catch(() => {
          console.log(model);
        });
    }
  }
});
