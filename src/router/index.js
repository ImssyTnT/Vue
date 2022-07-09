import MyPrice from '@/views/MyPrice.vue';
import MyHome from '@/views/MyHome.vue';
import MySort from '@/views/MySort.vue';
import MyUser from '@/views/MyUser.vue';

const routes = [
  { path: '/', redirect: '/home' },

  { path: '/home', component: MyHome },
  { path: '/price', component: MyPrice },
  { path: '/sort', component: MySort },
  { path: '/user', component: MyUser },
];
export default routes;
