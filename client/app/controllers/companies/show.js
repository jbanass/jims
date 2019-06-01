import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    delete(id) {
      let self = this;
      this.store
        .findRecord("company", id, { backgroundReload: false })
        .then(function(post) {
          post.destroyRecord().then(
            function(success) {
              self.transitionToRoute("companies");
            },
            function(error) {
              alert(error);
              post.rollbackAttributes();
            }
          );
        });
    },
    edit(model) {
      model.set("isEditing", true);
    },
    cancelEdit(model) {
      model.set("isEditing", false);
      model.rollbackAttributes();
    },
    saveCompany(model) {
      console.log(model);

      model.save().then(() => {
        model.set("isEditing", false);
      });
    },
    logModel(model) {
      console.log(model);
    }
  }
});
