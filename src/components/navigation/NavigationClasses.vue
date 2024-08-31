<template>
    <v-container fluid>
        <v-list nav v-model:selected="selection">
            <v-list-item
                v-for="(item, i) in classes"
                :key="i"
                :title="item.name"
                :subtitle="item.shortName"
                :value="item.id"
                prepend-icon="mdi-school"
                @click="onSelect(item)"
            >
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
                <v-card-title>Edit Class {{ selectedClass.name }}</v-card-title>
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
    </v-container>
</template>

<script>
import { useClientStore } from '@/stores/client';

export default {
    props: {
        linkToRoute: { type: Boolean, default: false },
        selectFirst: { type: Boolean, default: false },
        id: { type: String, required: true }
    },
    data: () => ({
        clientStore: useClientStore(),
        selection: null,
        selectedClass: null,
        dialogEdit: false,
        dialogDelete: false
    }),
    computed: {
        classes() {
            return this.clientStore.client.classes;
        },

        renderDialogEdit() {
            return this.selectedClass !== null;
        },

        renderDialogDelete() {
            return this.selectedClass !== null;
        }
    },
    created() {
        if (this.selectFirst === true) this.selectFirstClass();
        else this.selectClasseById();
    },
    methods: {
        openDialogEdit(selectedClass) {
            this.selectedClass = selectedClass;
            this.dialogEdit = true;
        },

        closeDialogEdit() {
            this.selectedClass = null;
            this.dialogEdit = false;
        },

        openDialogDelete(selectedClass) {
            this.selectedClass = selectedClass;
            this.dialogDelete = true;
        },

        closeDialogDelete() {
            this.selectedClass = null;
            this.dialogDelete = false;
        },

        selectFirstClass() {
            if (this.classes.length > 0) {
                const firstClass = this.classes[0];
                this.onSelect(firstClass);
                this.selection = [firstClass.id];
            }
        },
        selectClasseById() {
            const classe = this.classes.find((classe) => classe.id === this.id);
            if (classe) {
                this.selection = [classe.id];
            }
        },

        onSelect(item) {
            if (this.linkToRoute === true) {
                this.$router.push({
                    name: 'ClasseShow',
                    params: { id: item.id }
                });
            }
            // this.$emit('select', item);
        }
    }
};
</script>
