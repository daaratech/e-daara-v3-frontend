<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useClientStore } from "@/stores/client";
  //

  const authStore = useAuthStore();
  const clientStore = useClientStore();

  onMounted( () => {
    authStore.logIn().then(() => {
      clientStore.getClientData()
    })
  } )
</script>
