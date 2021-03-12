import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/index.vue'),
  },
  {
    path: '/',
    name: 'BaseLayout',
    component: () => import(/* webpackChunkName: "BaseLayout" */ '../layout/BaseLayout/index.vue'),
    children:[
      {
        path: '/books',
        name: 'Books',
        component: () => import(/* webpackChunkName: "Books" */ '../views/Books/index.vue'),
      },
    ],
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
