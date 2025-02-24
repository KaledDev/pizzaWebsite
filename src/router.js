import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Menu from './views/Menu.vue';
import Contact from './views/Contact.vue';

const routes = [
  { ppath: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
