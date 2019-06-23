import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    back(model) {
      this.model.rollbackAttributes();
      this.transitionToRoute("vendors");
    },
    delete(id) {
      let self = this;
      this.store
        .findRecord("vendor", id, { backgroundReload: false })
        .then(function(post) {
          post.destroyRecord().then(
            function() {
              self.transitionToRoute("vendors");
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
    saveVendor(model) {
      model.save().then(() => {
        model.set("isEditing", false);
      });
    }
  }
});
