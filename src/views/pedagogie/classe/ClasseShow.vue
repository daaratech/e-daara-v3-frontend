<template>
    <template v-if="!id">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-alert type="error" outlined>
                        <v-icon left>mdi-alert-circle</v-icon>
                        <span>Classe non trouvée</span>
                    </v-alert>
                </v-col>
            </v-row>
        </v-container>
    </template>
    <template v-else>
        <v-navigation-drawer :width="leftWidth" permanent>
            <!-- <template v-slot:prepend>
                <v-toolbar color="transparent">
                    <v-app-bar-title class="text-subtitle-1 font-weight-bold"
                        >Pedagogie</v-app-bar-title
                    >
                </v-toolbar>
                <v-divider></v-divider>
            </template> -->
            <navigation-classes
                link-to-route
                :selectFirst="false"
                :id="id"
            ></navigation-classes>
        </v-navigation-drawer>

        <!-- <v-navigation-drawer :width="rightWidth" location="right" permanent>
            <template v-slot:prepend>
                <v-toolbar color="transparent">
                    <v-app-bar-title class="text-subtitle-2 font-weight-medium"
                        >Agenda de la classe</v-app-bar-title
                    >
                </v-toolbar>
                <v-divider></v-divider>
            </template>
            <navigation-right-pedagogie></navigation-right-pedagogie>
        </v-navigation-drawer> -->
        <v-main class="ma-0 pa-0">
            <single-classe-container :id="id"></single-classe-container>
        </v-main>
    </template>
</template>
<script>
import SingleClasseContainer from '@/components/singleClass/SingleClasseContainer.vue';
export default {
    components: { SingleClasseContainer },
    data: () => ({
        id: null,
        tab: null,
        loading: false
    }),
    mounted() {
        this.id = this.$route.params.id;
    }
};
</script>
