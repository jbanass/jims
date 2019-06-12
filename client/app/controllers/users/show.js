import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    back(model) {
      this.model.rollbackAttributes();
      this.transitionToRoute("users");
    },
    delete(id) {
      let self = this;
      this.store
        .findRecord("user", id, { backgroundReload: false })
        .then(function(post) {
          post.destroyRecord().then(
            function() {
              self.transitionToRoute("users");
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
    saveUser(model) {
      model.save().then(() => {
        model.set("isEditing", false);
      });
    },
    log(model) {
      console.log(model);
    }
  }
});
