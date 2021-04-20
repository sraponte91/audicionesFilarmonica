import Vue from "vue";
import App from "/pages/index.vue";
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
    config: { id: 'UA-189671295-3' },
    appName: 'filarmonica2021',
    pageTrackerScreenviewEnabled: true
}, app.router);

new Vue({
    render: h => h(App)
  }).$mount("#app");