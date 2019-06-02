import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    back(model) {
      this.model.rollbackAttributes();
      this.transitionToRoute("companies");
    },
    cancel(model) {
      this.model.rollbackAttributes();
      this.transitionToRoute("companies");
    },
    saveCompany(model) {
      self = this;
      model
        .save()
        .then(function(success) {
          self.transitionToRoute("companies.show", model);
        })
        .catch(() => {
          console.log(model);
        });
    }
  }
});
