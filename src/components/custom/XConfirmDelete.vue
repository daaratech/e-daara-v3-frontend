<template>
    <v-empty-state>
        <template v-slot:media>
            <v-img
                :size="100"
                src="https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/teamwork.png"
            ></v-img>
        </template>

        <template v-slot:title>
            <div class="text-subtitle-2 mt-8">Confirmation</div>
        </template>

        <template v-slot:text>
            <div class="text-caption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores.
            </div>
        </template>

        <template v-slot:actions>
            <v-btn
                class="text-none"
                color="red"
                elevation="1"
                rounded="lg"
                size="small"
                text="Supprimer"
                width="96"
                @click="$emit('confirm')"
            ></v-btn>

            <v-btn
                class="text-none"
                elevation="1"
                rounded="lg"
                size="small"
                text="Annuler"
                width="96"
                @click="$emit('cancel')"
            ></v-btn>
        </template>
    </v-empty-state>
</template>
