<template>
    <v-navigation-drawer
        :width="leftWidth"
        permanent
        order="-1"
    >
        <template v-slot:prepend>
            <v-toolbar color="transparent">
                <v-app-bar-title class="text-subtitle-1 font-weight-bold">Evaluation</v-app-bar-title>
            </v-toolbar>
            <v-divider></v-divider>
        </template>
        <navigation-classes link-to-route select-first></navigation-classes>
    </v-navigation-drawer>

    <v-navigation-drawer
        :width="rightWidth"
        location="right"
        permanent
    >
        <template v-slot:prepend>
            <v-toolbar color="transparent">
                <v-app-bar-title class="text-subtitle-2 font-weight-medium">Modules</v-app-bar-title>
            </v-toolbar>
            <v-divider></v-divider>
        </template>
        <navigation-right-evaluation></navigation-right-evaluation>
    </v-navigation-drawer>

    <v-main>
        <router-view />
    </v-main>
</template>

<script>
import { useAppStore } from '@/stores/app'

export default {
    data: () => ({
        appStore: useAppStore(),
    }),
    computed: {
        leftWidth() {
            return this.appStore.frontendConfigs.sidebars.leftWidth
        },
        rightWidth() {
            return this.appStore.frontendConfigs.sidebars.rightWidth
        },
    },
}
</script>