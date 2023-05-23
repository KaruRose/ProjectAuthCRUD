<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { useAuthStore } from './stores/auth'

export default {
  data() {
    return {

    }
  },
  mounted() {
    useAuthStore()
  }
}
</script>

