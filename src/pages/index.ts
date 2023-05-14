import { RouteRecordRaw } from 'vue-router';
import Routing from './index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('./counter')

  },
  {
    path: '/trackpage',
    name: 'trackpage',
    component: () => import('./track-app')
  }
];
export { Routing };
