import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    delete(id) {
      this.store
        .findRecord("company", id, { backgroundReload: false })
        .then(function(post) {
          post.destroyRecord().then(
            function(success) {
              alert(success);
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
    },
    saveCompany(model) {
      console.log(model);
      model.set("isEditing", false);
      model.save();
    }
  }
});
