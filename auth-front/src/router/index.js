// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import RegisterPage from '@/components/RegisterPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage,
    },
  ],
});

export default router;
