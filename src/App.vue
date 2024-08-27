<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { useClientStore } from "@/stores/client";
  export default {
    data: () => ({
      authStore: useAuthStore(),
      clientStore: useClientStore()
    }),
    created() {
      this.authStore.logIn();
      this.clientStore.getClientData()
    }
  }
</script>
