import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    cancel(model) {
      this.model.rollbackAttributes();
      this.transitionToRoute("companies");
    },
    saveCompany(model) {
      self = this;
      model.save().then(function(success) {
        self.transitionToRoute("companies.show", model);
      });
    }
  }
});
