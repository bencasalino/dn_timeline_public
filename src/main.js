import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// global.jQuery = require('jquery');
// var $ = global.jQuery;
// widows.$ = $;
import $ from 'jquery'

import("./assets/js/jquery-3.3.1.min.js");
import("./assets/js/jquery.js");
import("./assets/css/bootstrap-grid.css");
import("./assets/css/bootstrap.min.css");
import("./assets/css/base.css");

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
