import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
// 导入路由
import Login from '@/views/Login';


Vue.use(Router);

export default new Router({
  routes: [
    {
     name:'login',
     path:'/login',
     component:Login
    },
  ]
});
