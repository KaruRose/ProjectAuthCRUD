import { createRouter, createWebHashHistory } from "vue-router";

import loginAuth from "../views/loginAuth.vue";
import signUp from '../views/signUp.vue'
import Home from '../views/Home.vue'
// import store from "../stores/auth.js" 


const routes = [
  // { path: '/',
  // component: Home },

  { 
    path: "/", 
    component: loginAuth 
  },
  { 
    path: "/signUp", 
    component: signUp 
  },
  { 
    path: "/home", 
    component: Home, 
    meta: {requiresAuth: true}
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next)=>{
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!store.state.auth) {
      next("/")
    }
    else {
      next()
    }
  }
  else {
    next()
  }
})

export default router;
