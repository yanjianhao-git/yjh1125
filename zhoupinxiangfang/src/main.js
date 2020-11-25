import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import common from "./components/Common";
Vue.component(common.name,common);
Vue.config.productionTip = false;

import "@/assets/utils.css";

import axios from "axios";
/* import VueAxios from "vue-axios";
Vue.use(VueAxios,axios); */
Vue.prototype.$axios=axios;

// 图片懒加载
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload,{
  loading:require("./assets/loading.gif"),
  error:require("./assets/logo.png"),
  attempt:1
})
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
