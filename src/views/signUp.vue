<template>
  <div>
    <div class="navbar bg-base-100, bg-purple-600">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">singUp</a>
      </div>
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
            </path>
          </svg>
        </button>
      </div>
    </div>
    <div>
      <input class="input input-bordered input-sm w-full max-w-xs" type="email" v-model="email" placeholder="Email"
        required>
      <br>
      <input class="input input-bordered input-sm w-full max-w-xs" type="password" v-model="password"
        placeholder="Password" required>
      <button type="submit" @click="handleSignUp">Sign Up</button>

    </div>
    <router-link class="btn btn-circle" to="/home">home</router-link>
    <br>
    <router-link class="btn btn-circle" to="/singUp">SingUp</router-link>

    <router-view></router-view>
  </div>
</template>

<script>

import { supabase } from '../config/supabse.js'

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async handleSignUp() {
      try {
        const {
          data,
          error
        } = await supabase.auth.signUp({
          email: this.email,
          password: this.password,
        });

        if (error) {
          console.error(error);
          // Manejar el error de registro
        } else {
          console.log(data.user);
          // Usuario ha sido registrado exitosamente
        }
      } catch (error) {
        console.error(error);
        // Manejar el error de registro
      }
    },
  },
};
</script>