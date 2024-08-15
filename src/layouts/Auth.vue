<template>
    <v-app>
        <v-main class="d-flex align-center justify-center">
            <div>
                <v-img
                    class="mx-auto my-6"
                    max-width="228"
                    src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
                ></v-img>

                <router-view />
            </div>
        </v-main>
    </v-app>
</template>

<script>
import { useAppStore } from '@/stores/app'

export default {
    data: () => ({
        appStore: useAppStore(),
    }),
}
</script>