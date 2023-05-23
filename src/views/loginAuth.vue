<template>
  <div>
    <div>
      <div class="navbar bg-base-100, bg-purple-600">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
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
      </div><br>
    </div>
    <input class="input input-bordered" type="email" v-model="email" placeholder="Email"
      required>
    <br>
    <input class="input input-bordered" type="password" v-model="password" placeholder="Password"
      required>
    <button class="btn btn-primary" @click="handleSignIn">Sign In</button><br>
    <br>
    <router-link class="btn btn-circle" to="/home">home</router-link>
    <br>
    <router-link class="btn btn-circle" to="/signUp">SignUp</router-link>
    <router-view></router-view>
  </div>
</template>
    
<script>
import { supabase } from '../config/supabse.js'
import { useAuthStore } from '../stores/auth';

export default {
  data() {
    return {
      email: 'juan.rosasr01@gmail.com',
      password: '12341234',
    };
  },
  mounted(){
    // const authStore = useAuthStore()
  },
  methods: {
    async handleSignIn() {
      // const authStore = useAuthStore()
      try {
        const {
          data,
          error
        } = await supabase.auth.signInWithPassword({
          email: this.email,
          password: this.password,
        });

        if (error) {
          console.error(error);
          // Manejar el error de inicio de sesión
        } else {
          console.log(data.user);
          useAuthStore().updateUser(data.user)
          this.$router.push({path: "home"})
          

          // Usuario ha iniciado sesión exitosamente
        }
      } catch (error) {
        console.error(error);
        // Manejar el error de inicio de sesión
      }
    },
    async logout() {

      let { error } = await supabase.auth.signOut()
      if (error) {
        console.error(error);
        // Manejar el error de inicio de sesión
      } else {
        console.log('Logout correcto');
      }
    }
  },
};
</script>
    