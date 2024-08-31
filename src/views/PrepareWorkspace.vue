<template>
    <v-empty-state
        headline="Workspace"
        image="https://vuetifyjs.b-cdn.net/docs/images/logos/v.png"
    >
        <template v-slot:title>
            <div class="text- my-5">Nous preparons votre espace de travail ...</div>

            <v-progress-linear
                color="blue"
                height="10"
                rounded
                indeterminate
            ></v-progress-linear>
        </template>
    </v-empty-state>
</template>

<script>
import { useClientStore } from '@/stores/client';

export default {
    data: () => ({
        clientStore: useClientStore()
    }),
    created() {
        this.clientStore.getClientData().then(() => {
            setTimeout(() => {
                this.$router.push({ name: 'dashboard' });
            }, 3000);
        });
    }
};
</script>
