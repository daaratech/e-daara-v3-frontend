<template>
    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        location="bottom"
        transition="scale-transition"
    >
        <template v-slot:activator="{ props }">
            <v-list-item
                rounded
                v-bind="props"
                :prepend-avatar="user.avatar"
                :subtitle="user.email"
                :title="user.fullname"
            ></v-list-item>
        </template>

        <v-card min-width="300">
            <v-list>
                <v-list-item
                    :prepend-avatar="user.avatar"
                    :subtitle="user.email"
                    :title="user.fullname"
                ></v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
                <v-list-item
                    prepend-icon="mdi-theme-light-dark"
                    title="Mode Sombre"
                >
                    <template v-slot:append>
                        <ToggleTheme></ToggleTheme>
                    </template>
                </v-list-item>

                <v-list-item
                    prepend-icon="mdi-logout"
                    title="Deconnexion"
                    @click="logout"
                ></v-list-item>
            </v-list>
        </v-card>
    </v-menu>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

export default {
    data: () => ({
        authStore: useAuthStore(),
        menu: false,
    }),
    computed: {
        user() {
            return this.authStore.user.data
        }
    },
    methods: {
        logout() {
            this.authStore.logOut().then(() => this.$router.push({ name: 'login' }))
        }
    },
}
</script>