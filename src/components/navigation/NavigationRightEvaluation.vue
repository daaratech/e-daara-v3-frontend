<template>
    <v-list v-model:selected="selection" nav lines="two">
        <v-list-item
            v-for="i in 8"
            :key="i"
            :title="`Nom module ${i}`"
            :subtitle="`Coefficient ${i+2}`"
            :value="i"
            @click="onSelect(i)"
        >
            <template v-slot:prepend>
                <v-avatar rounded>
                    <v-icon>mdi-book-open-outline</v-icon>
                </v-avatar>
            </template>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    data: () => ({
        selection: null,
    }),
    methods: {
        onSelect(item) {
            // if (this.linkToRoute === true) {
            //     this.$router.push({query: { ...this.$route.query, ...{financeBucketId: item.id} } })
            // }
            this.$emit('select', item)
        },
    },
}
</script>