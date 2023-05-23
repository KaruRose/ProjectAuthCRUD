import { defineStore } from 'pinia'


export const useAuthStore = defineStore('auth', {
  state: () => {
    return { 
      user: null
    }
  },
  getters: {
    auth() {
      return this.user !== null
    }
  },
  actions: {
    logout(){
      this.user = null
    },
    updateUser(user){
      this.user = user
    }
  },
})