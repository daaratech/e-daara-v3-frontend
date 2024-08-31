<template>
    <v-skeleton-loader
        v-if="loading"
        type="list-item-avatar-two-line@10"
        color="transparent"
    ></v-skeleton-loader>

    <v-list v-else bg-color="transparent">
        <v-list-item v-for="i in 40" :key="i">
            <template v-slot:prepend>
                <v-avatar
                    rounded
                    image="https://cdn.vuetifyjs.com/images/john.jpg"
                ></v-avatar>
            </template>
            <v-list-item-title class="text-subtitle-2 font-weight-bold">{{
                `Fullname Etudiant 0${i}`
            }}</v-list-item-title>
            <v-list-item-subtitle class="text-caption"
                >Lorem ipsum dolor sit amet consectetur.</v-list-item-subtitle
            >

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

<script>
export default {
    props: {
        loading: { type: Boolean, default: false }
    }
};
</script>
