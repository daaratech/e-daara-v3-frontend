<template>
    <v-container>
        <!-- <p
        class="d-inline text-info mx-3 text-overline"
        style="cursor: pointer; color: #2196f3"
        @click="$router.push({ name: 'StudentIndex' })"
    >
        <v-icon color="info">mdi-backburger</v-icon>&nbsp;&nbsp;<span class="text-decoration-underline">Retour</span>
    </p> -->
        <v-avatar
            color="blue-grey lighten-4"
            size="150"
            class="text-center mx-auto d-flex"
        >
            <span class="white--text font-weight-bold text-h2 headline text-uppercase"
                >JD</span
            >
        </v-avatar>
        <div class="my-10">
            <p id="title" class="text-h4 font-weight-bold text-center">
                Monsieur Jean Dupont
            </p>
            <p id="title" class="text-h5 text-center">
                Né(e) le 1er janvier 1990 à Paris
            </p>
        </div>
        <v-expansion-panels flat multiple hover focusable inset v-model="panel">
            <v-expansion-panel>
                <v-expansion-panel-title color="blue-grey lighten-4" class="text-h5"
                    >Informations Personnelles</v-expansion-panel-title
                >
                <v-expansion-panel-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <p class="text-h6 text-decoration-underline mb-0">
                                    Année d'entrée à l'UCAD
                                </p>
                                <p>2010</p>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <p class="text-h6 text-decoration-underline mb-0">
                                    Année de sortie de l'UCAD
                                </p>
                                <p>2014</p>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <p class="text-h6 text-decoration-underline mb-0">
                                    Faculté(s) fréquentée(s)
                                </p>
                                <p>- Sciences Sociales<br />- Droit</p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-title color="blue-grey lighten-4" class="text-h5"
                    >Diplôme</v-expansion-panel-title
                >
                <v-expansion-panel-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <p class="text-h6 text-decoration-underline mb-0">
                                    Numéro Carte d'étudiant
                                </p>
                                <p>123456789</p>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <p class="text-h6 text-decoration-underline mb-0">
                                    Diplôme demandé
                                </p>
                                <p>Master en Droit</p>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <p class="text-h6 text-decoration-underline mb-0">
                                    Mention du diplôme
                                </p>
                                <p>Très bien</p>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <p class="text-h6 text-decoration-underline mb-0">
                                    Établissement d'obtention du diplôme
                                </p>
                                <p>UCAD</p>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <p class="text-h6 text-decoration-underline mb-0">
                                    Année d'obtention
                                </p>
                                <p>2014</p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-title color="blue-grey lighten-4" class="text-h5"
                    >Contacts</v-expansion-panel-title
                >
                <v-expansion-panel-text eager>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <p class="text-h6 text-decoration-underline mb-0">
                                    Téléphone 1
                                </p>
                                <p>+33 6 12 34 56 78</p>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <p class="text-h6 text-decoration-underline mb-0">
                                    Email
                                </p>
                                <p>jean.dupont@example.com</p>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <p class="text-h6 text-decoration-underline mb-0">
                                    Ville
                                </p>
                                <p>Paris</p>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <p class="text-h6 text-decoration-underline mb-0">Pays</p>
                                <p>France</p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        id: null,
        panel: [0, 1, 2],
        loading: false
    }),
    mounted() {
        this.id = this.$route.params.id;
        console.log(this.id);
    }
};
</script>
