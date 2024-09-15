<template>
    <v-container fluid>
        <div class="d-flex justify-space-between">
            <h5 class="text-h5 font-weight-bold">
                Liste des élèves <v-icon>mdi-account-group</v-icon>
            </h5>
            <div>
                Trier par :
                <v-menu offset-y>
                    <template v-slot:activator="{ props }">
                        <v-btn dark text v-bind="props">
                            {{ activeSort.title }} <v-icon>{{ activeSort.icon }}</v-icon>
                            <v-icon>mdi-menu-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="(item, index) in sortItems"
                            :key="index"
                            :value="index"
                            @click="callback(item)"
                        >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
            <div>
                Afficher par :
                <v-btn-toggle
                    v-model="toggle"
                    variant="outlined"
                    divided
                    density="comfortable"
                >
                    <v-btn icon="mdi-view-grid-outline"></v-btn>
                    <v-btn icon="mdi-view-list"></v-btn>
                </v-btn-toggle>
            </div>
            <v-sheet class="d-flex justify-space-around" width="30%" color="transparent">
                <v-text-field
                    prepend-inner-icon="mdi-magnify"
                    label="Recherche"
                    placeholder=""
                    density="compact"
                    variant="outlined"
                />
                <!-- <v-btn class="ml-1" dark color="secondary">
                    <v-icon dark>mdi-reload</v-icon> Lancer
                </v-btn> -->
            </v-sheet>
        </div>
        <v-data-iterator
            :items="students"
            :page="page"
            :itemsPerPage="$vuetify.display.mdAndUp ? 8 : 4"
        >
            <template v-slot:default="{ items }">
                <v-row>
                    <v-col
                        v-for="item in items"
                        :key="item.raw.id"
                        cols="12"
                        lg="3"
                        md="4"
                        sm="12"
                    >
                        <v-card color="#eeeeee" max-width="374">
                          <div class="d-flex justify-center">
                            <v-avatar
                            size="100"
                            class="mx-auto"
                            >
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>
                          </v-avatar>
                          </div>
                            <v-card-item>
                                <v-card-title>
                                    {{ item.raw.firstName }} {{ item.raw.lastName }}
                                </v-card-title>
                                <v-card-subtitle>
                                    {{ item.raw.class.name }}
                                </v-card-subtitle>
                            </v-card-item>
                            <v-card-text>
                                <p>Né(e) le{{ format(item.raw.createdAt) }}</p>
                                <p>{{ item.raw.absences.length }} Absence(s)</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                    variant="outlined"
                                    color="primary"
                                    :to="{
                                        name: 'StudentShow',
                                        params: { id: item.raw.id }
                                    }"
                                >
                                    <v-icon> mdi-eye </v-icon>
                                    Afficher dossier &nbsp;
                                </v-btn>
                                <v-btn text color="error">Exclure</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </template>
            <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
                <div class="d-flex align-center justify-center pa-4">
                    <v-btn
                        :disabled="page === 1"
                        density="comfortable"
                        icon="mdi-arrow-left"
                        variant="tonal"
                        rounded
                        @click="prevPage"
                    ></v-btn>

                    <div class="mx-2 text-caption">
                        Page {{ page }} of {{ pageCount }}
                    </div>

                    <v-btn
                        :disabled="page >= pageCount"
                        density="comfortable"
                        icon="mdi-arrow-right"
                        variant="tonal"
                        rounded
                        @click="nextPage"
                    ></v-btn>
                </div>
            </template>
        </v-data-iterator>
    </v-container>
</template>
<script>
import { useClientStore } from '@/stores/client';
export default {
    data: () => ({
        clientStore: useClientStore(),
        page: 1,
        toggle: 0,
        activeSort: {
            title: 'Nom',
            icon: 'mdi-sort-alphabetical-ascending'
        },
        sortItems: [
            {
                title: 'Nom',
                icon: 'mdi-sort-alphabetical-ascending'
            },
            {
                title: 'Date de création',
                icon: 'mdi-sort-numeric-ascending'
            },
            {
                title: "Nombre d'élèves",
                icon: 'mdi-sort-numeric-ascending'
            },
            {
                title: "Nombre d'enseignants",
                icon: 'mdi-sort-numeric-ascending'
            }
        ]
    }),
    computed: {
        students() {
            return this.clientStore.client.students;
        },
        getItemsPerPage() {
            return this.$vuetify.breakpoint.mdAndUp ? 8 : 4;
        }
    },
    methods: {
        callback(sortItem) {
            this.activeSort = sortItem;
        },
        format(date) {
            return new Date(date).toLocaleDateString();
        }
    },
    mounted() {
        console.log(this.classes);
    }
};
</script>
