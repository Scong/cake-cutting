import Vue from 'vue';
import Router from 'vue-router';
import CakeCutting from '@/components/CakeCutting';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CakeCutting',
      component: CakeCutting,
    },
  ],
});
