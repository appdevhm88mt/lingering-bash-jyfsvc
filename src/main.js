import Vue from "vue";
import App from "./App.vue";

import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";

import "froala-editor/js/plugins.pkgd.min.js";

import VueFroala from "vue-froala-wysiwyg";
Vue.use(VueFroala);
window.VueFroala = VueFroala;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
