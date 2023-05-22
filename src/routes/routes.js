import { createRouter, createWebHashHistory } from "vue-router";

import loginAuth from "../views/loginAuth.vue";
import signUp from '../views/signUp.vue'
import Home from '../views/Home.vue'

const routes = [
  // { path: '/',
  // component: Home },

  { 
    path: "/login", 
    component: loginAuth 
  },
  { 
    path: "/signUp", 
    component: signUp 
  },
  { 
    path: "/home", 
    component: Home 
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
