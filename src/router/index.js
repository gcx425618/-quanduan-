import Vue from 'vue';
import Router from 'vue-router';
// 导入路由
import Login from '@/views/Login';
import Home from '@/views/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home
    }
  ]
});
