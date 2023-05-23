<template>
  <div>
    <div>
      <div class="navbar bg-base-100, bg-purple-600">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <br />
    </div>
    <br />
    <router-link
      class="btn btn-circle"
      to="/"
      v-if="authStore?.auth == false"
      >Login</router-link
    >
    <br />
    <router-link
      class="btn btn-circle"
      to="/signUp"
      v-if="authStore?.auth == false"
      >signUp</router-link
    >

    <button class="btn btn-circle" v-if="authStore?.auth != false" @click="handleLogout">
      Cerrar sesion
    </button>
    <router-view></router-view>
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();

// const { error } = await supabase.auth.signOut()
</script>

<script>
import { supabase } from '../config/supabse.js'
export default {
  data() {
    return {};
  },
  mounted() {
    // const authStore = useAuthStore();
  },
  methods: {
    async handleLogout() {
      const authStore = useAuthStore();
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error(error);
      } else {
        alert('Logout correcto');
        authStore.logout()
        this.$router.push({path: "login"})
      }
    },
  },
};
</script>
  
  