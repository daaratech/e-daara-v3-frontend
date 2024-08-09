<template>
    <template v-if="showEmpyState">
        <v-empty-state
            icon="mdi-magnify"
            text="Try adjusting your search terms or filters. Sometimes less specific terms or broader queries can help you find what you're looking for."
            title="We couldn't find a match."
        ></v-empty-state>
    </template>

    <template v-else>
        <v-app-bar flat border="b-sm">
            <template v-slot:prepend>
                <div class="d-flex flex-column">
                    <div class="text-subtitle-1 font-weight-bold">{{ classData.name }}</div>
                    <div class="text-subtitle-2">{{ classData.shortName }}</div>
                </div>
            </template>

            <template v-slot:append>
                <!-- <v-text-field
                    placeholder="Recherche"
                    variant="outlined"
                    width="300"
                    density="compact"
                    prepend-inner-icon="mdi-magnify"
                    hide-details
                    clearable
                ></v-text-field> -->
            </template>

            <template v-slot:extension>
                <v-tabs v-model="tab">
                    <v-tab value="tab-student" class="text-none">
                        <v-icon start size="25">mdi-account-school-outline</v-icon>
                        Etudiants
                    </v-tab>
                    <v-tab value="tab-professor" class="text-none">
                        <v-icon start size="25">mdi-account-tie-hat-outline</v-icon>
                        Professeurs
                    </v-tab>
                    <v-tab value="tab-course" class="text-none">
                        <v-icon start size="25">mdi-book-open-outline</v-icon>
                        Cours
                    </v-tab>
                    <v-tab value="tab-agenda" class="text-none">
                        <v-icon start size="25">mdi-calendar-outline</v-icon>
                        Emploi du temps
                    </v-tab>
                </v-tabs>
            </template>
        </v-app-bar>

        <v-tabs-window v-model="tab">
            <v-tabs-window-item value="tab-student">
                <single-class-etudiants :loading="loading" />
            </v-tabs-window-item>

            <v-tabs-window-item value="tab-professor">
                <single-class-professeurs :loading="loading" />
            </v-tabs-window-item>

            <v-tabs-window-item value="tab-course">
                <single-class-cours :loading="loading" />
            </v-tabs-window-item>

            <v-tabs-window-item value="tab-agenda">
                <single-class-agenda />
            </v-tabs-window-item>
        </v-tabs-window>
    </template>
</template>

<script>
import { useClientStore } from '@/stores/client'

export default {
    data: () => ({
        clientStore: useClientStore(),
        tab: null,
        loading: false,
    }),
    created() {
        this.loading = true
        setTimeout(() => {
            this.loading = false
        }, 2000);
    },
    computed: {
        classId() {
            return this.$route.query.classId
        },
        classData() {
            const getClassById = this.clientStore.getClassById
            return getClassById(this.classId)
        },
        showEmpyState() {
            return !this.classId
        },
    },
}
</script>