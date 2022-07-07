import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/iconfont.css';
import axios from 'axios';
axios.defaults.baseURL = 'https://www.escook.cn';
Vue.prototype.$axios = axios;
Vue.directive('focus', {
  inserted(el) {
    console.log(el);
    el.focus();
  },
});
Vue.directive('btnShow', {
  inserted(el, bind, vnode) {
    // console.log(vnode.context);
    // console.log(bind);
    if (bind.expression == '11') {
      el.style.display = 'inline-block';
    } else {
      el.style.display = 'none';
    }
    // el.style.display = 'none';
    // vnode.context.arr.map((item) => {
    //   if (item == bind.value) {
    //     console.log(vnode.context[bind.expression]);
    // vnode.context[bind.expression].style.display = 'inline-block';
    // }
    // });
  },
  // update(el, val) {
  //   if (val) {
  //     return (el.style.display = 'inline-block');
  //   }
  //   el.style.display = 'none';
  // },
});
new Vue({
  render: (h) => h(App),
}).$mount('#app');
