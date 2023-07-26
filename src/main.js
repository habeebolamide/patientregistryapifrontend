// import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import VueRouter from "vue-router";
import GullKit from "./plugins/gull.kit";
// import "babel-polyfill";
// import es6Promise from "es6-promise";
// es6Promise.polyfill();
import store from "./store";
import Breadcumb from "./components/breadcumb";
import authMixin from './mixins/auth';
import Axios from 'axios'
import Paginate from 'vuejs-paginate';
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
Vue.component('paginate', Paginate);
const options = {
  position :"top-right"
};


Vue.use(Toast, options);
Vue.prototype.$http = Axios;
// un comment these  if you use firebase
// import firebase from "firebase/app";
// import "firebase/auth";
// import {firebaseSettings} from "@/data/config";
import i18n from "./lang/lang";

Vue.component("breadcumb", Breadcumb);
// Vue.use(VueRouter);
Vue.mixin(authMixin);
Vue.use(GullKit);
// firebase.initializeApp(firebaseSettings);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
