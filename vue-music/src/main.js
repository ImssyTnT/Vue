import Vue from 'vue';
import App from './App.vue';
import moment from 'moment';

import '@/assets/mobile/flexible';
import '@/assets/styles/reset.css';
import router from '@/router';

import { NavBar } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Cell } from 'vant';
import { Grid, GridItem } from 'vant';
import { Image as VanImage } from 'vant';
import { Icon } from 'vant';
import { Search } from 'vant';
import { Tag, List, Toast } from 'vant';

Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Cell);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Tag);
Vue.use(List);
Vue.use(Toast);
Vue.use(moment);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
