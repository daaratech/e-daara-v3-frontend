<template>
    <template v-if="showEmpyState">
        <v-empty-state
            icon="mdi-magnify"
            text="Try adjusting your search terms or filters. Sometimes less specific terms or broader queries can help you find what you're looking for."
            title="We couldn't find a match."
        ></v-empty-state>
    </template>

    <template v-else>
        <v-app-bar flat border="b-sm" class="px-4">
            <template v-slot:prepend>
                <div class="d-flex flex-column">
                    <div class="text-subtitle-1 font-weight-bold">{{ financeBucket.title }}</div>
                    <div class="text-subtitle-2">{{ classData.name }}</div>
                </div>
            </template>

            <template v-slot:append>
                <v-text-field
                    placeholder="Recherche"
                    variant="outlined"
                    width="300"
                    density="compact"
                    prepend-inner-icon="mdi-magnify"
                    hide-details
                    clearable
                ></v-text-field>
            </template>
        </v-app-bar>

        <v-list bg-color="transparent">
            <v-list-item
                v-for="i in 40"
                :key="i"
            >
                <template v-slot:prepend>
                    <v-avatar rounded image="https://cdn.vuetifyjs.com/images/john.jpg"></v-avatar>
                </template>
                <v-list-item-title class="text-subtitle-2 font-weight-bold">{{ `Etudiant 0${i}` }}</v-list-item-title>
                <v-list-item-subtitle class="text-caption">Lorem ipsum dolor sit amet consectetur.</v-list-item-subtitle>

                <template v-slot:append>
                    <v-btn
                        color="grey-lighten-1"
                        icon="mdi-information"
                        variant="text"
                    ></v-btn>
                </template>
            </v-list-item>
        </v-list>
    </template>
</template>

<script>
import { useClientStore } from '@/stores/client'

export default {
    data: () => ({
        clientStore: useClientStore(),
        loading: false,
    }),
    computed: {
        classId() {
            return this.$route.query.classId
        },
        financeBucketId() {
            return this.$route.query.financeBucketId
        },
        classData() {
            const getClassById = this.clientStore.getClassById
            return getClassById(this.classId)
        },
        financeBucket() {
            const getFinanceBucketById = this.clientStore.getFinanceBucketById
            return getFinanceBucketById(this.financeBucketId)
        },
        showEmpyState() {
            return !this.classId || !this.financeBucketId
        },
    },
}
</script>