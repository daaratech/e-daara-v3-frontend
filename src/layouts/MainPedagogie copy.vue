<template>
  <v-card flat>
    <v-app-bar id="test" color="primary" absolute>
      test
    </v-app-bar>
    <v-card>
      <v-navigation-drawer
        :width="leftWidth"
        permanent

    >
        <template v-slot:prepend>
            <v-toolbar color="transparent">
                <v-app-bar-title class="text-subtitle-1 font-weight-bold">Classe</v-app-bar-title>
                <v-spacer></v-spacer>
                <v-btn flat icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
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
                <v-app-bar-title class="text-subtitle-2 font-weight-medium">Agenda de la classe</v-app-bar-title>
            </v-toolbar>
            <v-divider></v-divider>
        </template>
        <navigation-right-pedagogie></navigation-right-pedagogie>
    </v-navigation-drawer>

    <v-main>
        <router-view />
    </v-main>
    </v-card>
  </v-card>
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
