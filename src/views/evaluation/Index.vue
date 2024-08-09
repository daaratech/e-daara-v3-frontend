<template>
    <v-app-bar flat border="b-sm" class="px-4">
        <template v-slot:prepend>
            <div class="d-flex flex-column">
                <div class="text-subtitle-1 font-weight-bold">Matieres</div>
                <div class="text-subtitle-2">Lorem ipsum dolor sit.</div>
            </div>
        </template>

        <template v-slot:append>
            <v-text-field
                v-model="search"
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

    <x-school-report-class :search="search"></x-school-report-class>
</template>

<script>
export default {
    data: () => ({
        search: '',
    }),
}
</script>