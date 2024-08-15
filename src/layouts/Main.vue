<template>
    <v-navigation-drawer
        permanent
        rail
        expand-on-hover
        order="-1"
    >
        <v-list>
            <v-list-item
                v-if="user"
                prepend-avatar="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-light.svg"
                :subtitle="appVersion"
                :title="appName"
            ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav>
            <v-list-item
                v-for="(item, i) in menu"
                :key="i"
                :prepend-icon="item.icon"
                :title="item.title"
                :to="{ name: item.route }"
                lines="two"
            ></v-list-item>
        </v-list>

        <template v-slot:append>
            <v-list nav>
                <v-list-item
                    prepend-icon="mdi-logout"
                    title="Deconnexion"
                    @click="logout"
                ></v-list-item>
            </v-list>
        </template>
    </v-navigation-drawer>

    <v-app-bar
        flat
        border="b-sm"
    >
        <v-text-field
            placeholder="Recherche"
            variant="solo-inverted"
            max-width="300"
            density="compact"
            prepend-inner-icon="mdi-magnify"
            class="mx-2"
            hide-details
            clearable
            flat
        ></v-text-field>
        <v-spacer></v-spacer>
        <user-client-info></user-client-info>
        <user-popover></user-popover>
    </v-app-bar>

    <v-app-bar
        height="48"
        order="1"
        location="bottom"
        flat
    ></v-app-bar>

    <router-view />
</template>

<script>
import { useAppStore } from '@/stores/app'
import { useAuthStore } from '@/stores/auth'

export default {
    data: () => ({
        appStore: useAppStore(),
        authStore: useAuthStore(),
        menu: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard', route: 'dashboard' },
            { title: 'Pedagogies', icon: 'mdi-school-outline', route: 'pedagogie-index' },
            { title: 'Agenda', icon: 'mdi-calendar-outline', route: 'agenda-index' },
            { title: 'Evaluation', icon: 'mdi-scale-balance', route: 'evaluation-index' },
            { title: 'Finances', icon: 'mdi-bank-outline', route: 'finance-index' },
        ]
    }),
    computed: {
        appName() {
            return this.appStore.appName
        },
        appVersion() {
            return this.appStore.appVersion
        },
        user() {
            return this.authStore.user.data
        },
    },
    methods: {
        logout() {
            this.authStore.logOut().then(() => this.$router.push({ name: 'login' }))
        }
    },
}
</script>