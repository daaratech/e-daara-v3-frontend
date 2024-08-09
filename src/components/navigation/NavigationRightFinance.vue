<template>
    <v-list v-model:selected="selection" nav lines="two">
        <v-list-item
            v-for="(item, i) in financesBuckets"
            :key="i"
            :title="item.title"
            :subtitle="item.desc"
            :value="item.id"
            @click="onSelect(item)"
        >
            <template v-slot:prepend>
                <v-avatar rounded :color="computeColor(item.title)">
                    <v-icon color="white">mdi-currency-usd</v-icon>
                </v-avatar>
            </template>

            <template v-slot:append>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn
                            flat
                            variant="text"
                            icon="mdi-dots-vertical"
                            size="small"
                            v-bind="props"
                        ></v-btn>
                    </template>

                    <v-list nav density="compact" min-width="200">
                        <v-list-item
                            prepend-icon="mdi-pencil-box-outline"
                            @click="openDialogEdit(item)"
                        >
                            <v-list-item-title>Editer</v-list-item-title>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item
                            prepend-icon="mdi-trash-can-outline"
                            class="text-red"
                            @click="openDialogDelete(item)"
                        >
                            <v-list-item-title>Supprimer</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
        </v-list-item>
    </v-list>

    <v-dialog
        v-if="renderDialogEdit"
        v-model="dialogEdit"
        max-width="448"
        transition="dialog-bottom-transition"
    >
        <v-card class="pa-4">
            <v-card-title>Edit Financial Bucket {{ selectedBucket.name }}</v-card-title>
        </v-card>
    </v-dialog>

    <v-dialog
        v-if="renderDialogDelete"
        v-model="dialogDelete"
        max-width="448"
        transition="dialog-bottom-transition"
    >
        <v-card class="pa-4">
            <x-confirm-delete
                @confirm="closeDialogDelete"
                @cancel="closeDialogDelete"
            ></x-confirm-delete>
        </v-card>
    </v-dialog>
</template>

<script>
import { useClientStore } from '@/stores/client'

export default {
    props: {
        linkToRoute: { type: Boolean, default: false },
        selectFirst: { type: Boolean, default: false },
    },
    data: () => ({
        clientStore: useClientStore(),
        selection: null,
        selectedBucket: null,
        dialogEdit: false,
        dialogDelete: false,
    }),
    computed: {
        financesBuckets() {
            return this.clientStore.client.finances_buckets
        },

        renderDialogEdit() {
            return this.selectedBucket !== null
        },

        renderDialogDelete() {
            return this.selectedBucket !== null
        },
    },
    created() {
        if (this.selectFirst === true) setTimeout(() => this.selectFirstBucket(), 500)
    },
    methods: {
        computeColor(text) {
            const colors = ['blue', 'red', 'green', 'orange', 'indigo', 'teal', 'pink']
            const index = text.length % colors.length
            return colors[index]
        },

        openDialogEdit (selectedBucket) {
            this.selectedBucket = selectedBucket
            this.dialogEdit = true
        },

        closeDialogEdit () {
            this.selectedBucket = null
            this.dialogEdit = false
        },

        openDialogDelete (selectedBucket) {
            this.selectedBucket = selectedBucket
            this.dialogDelete = true
        },

        closeDialogDelete () {
            this.selectedBucket = null
            this.dialogDelete = false
        },

        selectFirstBucket() {
            if (this.financesBuckets.length > 0) {
                const firstBucket = this.financesBuckets[0]
                this.onSelect(firstBucket)
                this.selection = [firstBucket.id]
            }
        },

        onSelect(item) {
            if (this.linkToRoute === true) {
                this.$router.push({query: { ...this.$route.query, ...{financeBucketId: item.id} } })
            }
            this.$emit('select', item)
        },
    },
}
</script>