import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("about");
  this.route("companies", function() {
    this.route("show", { path: "/:id" });
    this.route("new");
  });
  this.route("users", function() {
    this.route("show", { path: "/:id" });
    this.route("new");
  });
  this.route("vendors", function() {
    this.route("show", { path: "/:id" });
    this.route("new");
  });
  this.route("inventory-types", function() {
    this.route("show", { path: "/:id" });
    this.route("new");
  });
  this.route("inventory-items", function() {
    this.route("show", { path: "/:id" });
    this.route("new");
  });
});

export default Router;
