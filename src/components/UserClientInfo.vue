<template>
    <v-list-item
        rounded
        prepend-avatar="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-light.svg"
        title="Ecole Thierno Souleymane BAL"
    ></v-list-item>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

export default {
    data: () => ({
        authStore: useAuthStore()
    })
};
</script>
