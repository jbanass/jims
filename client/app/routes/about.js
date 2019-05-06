import Route from "@ember/routing/route";
import fetch from "fetch";

export default Route.extend({
  model() {
    return fetch("/api/v1/materials/expanded.json").then(function(response) {
      return response.json();
    });
  }
});
