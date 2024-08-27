<template>
    <template v-if="showEmpyState">
        <v-empty-state
            icon="mdi-magnify"
            text="Try adjusting your search terms or filters. Sometimes less specific terms or broader queries can help you find what you're looking for."
            title="We couldn't find a match."
        ></v-empty-state>
    </template>

    <template v-else>
        <v-app-bar flat border="b-sm" class="py-1">
            <template v-slot:prepend>
                <div class="d-flex flex-column">
                    <div class="text-subtitle-1 font-weight-bold">{{ classData.name }}</div>
                    <div class="text-subtitle-2">{{ classData.shortName }}</div>
                </div>
            </template>

            <template v-slot:append>
                <v-btn
                    class="text-none text-subtitle-1"
                    elevation="2"
                    variant="flat"
                    prepend-icon="mdi-plus"
                    rounded
                    color="blue"
                    block
                    @click="showAddStudentDialog = true"
                >
                    Ajouter Etudiant
                </v-btn>
            </template>

            <template v-slot:extension>
                <div class="container">
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
                </div>
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
        <v-dialog v-model="showAddStudentDialog" width="auto">
            <v-card max-width="600">
                <!-- <v-card-title> -->
                <v-toolbar color="blue" density="comfortable" dark>
                    <v-btn flat icon>
                        <v-icon>mdi-account-plus-outline</v-icon>
                    </v-btn>

                    <v-toolbar-title> Ajouter un(e) élève </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="showAddStudentDialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <!-- </v-card-title> -->

                <v-card-text>
                    <v-form ref="form">
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="formData.fileNumber.value"
                                        :rules="formData.fileNumber.rules"
                                        :label="formData.fileNumber.label + ' *'"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="formData.firstName.value"
                                        :rules="formData.firstName.rules"
                                        :label="formData.firstName.label + ' *'"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="formData.lastName.value"
                                        :rules="formData.lastName.rules"
                                        :label="formData.lastName.label + ' *'"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-date-input
                                        :label="formData.birthDate.label + ' *'"
                                        :text="dateFieldComputed"
                                        :rules="formData.birthDate.rules"
                                        v-model="formData.birthDate.value"
                                        readonly
                                        clearable
                                        max-width="350"
                                        max="2006-01-01"
                                        prepend-icon=""
                                        prepend-inner-icon="$calendar"
                                    ></v-date-input>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="formData.birthPlace.value"
                                        :rules="formData.birthPlace.rules"
                                        :label="formData.birthPlace.label + ' *'"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-select
                                        clearable
                                        v-model="formData.sexe.value"
                                        :items="formData.sexe.options"
                                        :rules="formData.sexe.rules"
                                        :label="formData.sexe.label + ' *'"
                                        required
                                    ></v-select>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="formData.address.value"
                                        :rules="formData.address.rules"
                                        :label="formData.address.label + ' *'"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="formData.phone.value"
                                        :rules="formData.phone.rules"
                                        :label="formData.phone.label + ' *'"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="formData.fatherFirstName.value"
                                        :rules="formData.fatherFirstName.rules"
                                        :label="formData.fatherFirstName.label + ' *'"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="formData.motherFirstName.value"
                                        :rules="formData.motherFirstName.rules"
                                        :label="formData.motherFirstName.label + ' *'"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="formData.tutorFullName.value"
                                        :rules="formData.tutorFullName.rules"
                                        :label="formData.tutorFullName.label + ' *'"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="formData.tutorPhone.value"
                                        :rules="formData.tutorPhone.rules"
                                        :label="formData.tutorPhone.label + ' *'"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-card-text>
                <v-divider class="mt-2"></v-divider>

                <v-card-actions class="my-2 d-flex justify-end">
                    <v-btn class="text-none" rounded="xl" text="Annuler" @click="showAddStudentDialog = false"></v-btn>

                    <v-btn
                        class="text-none"
                        color="primary"
                        rounded="lg"
                        text="Enregistrer"
                        variant="flat"
                        @click="submit"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </template>
</template>

<script>
import { useClientStore } from '@/stores/client';
import { tr } from 'vuetify/locale';

export default {
    data: () => ({
        clientStore: useClientStore(),
        tab: null,
        loading: false,
        showAddStudentDialog: false,
        selection: [],
        menu: false,
        valid: false,
        formData: {
            fileNumber: {
                label: 'Numéro dossier',
                value: '',
                rules: [
                    (v) => !!v || 'Le numéro de dossier est requis.',
                    (v) => /^[A-Za-z0-9]+$/.test(v) || 'Le numéro de dossier doit être alphanumérique.',
                    (v) => (v && v.length === 8) || 'Le numéro de dossier doit comporter exactement 8 caractères.'
                ]
            },
            firstName: {
                label: 'Prénom',
                value: '',
                rules: [
                    (v) => !!v || 'Le prénom est requis.',
                    (v) => /^[a-zA-ZÀ-ÖØ-öø-ÿ -]+$/.test(v) || 'Le prénom ne doit contenir que des lettres.',
                    (v) => (v && v.length >= 2) || 'Le prénom doit comporter au moins 2 caractères.'
                ]
            },
            lastName: {
                label: 'Nom',
                value: '',
                rules: [
                    (v) => !!v || 'Le nom de famille est requis.',
                    (v) => /^[a-zA-ZÀ-ÖØ-öø-ÿ -]+$/.test(v) || 'Le nom de famille ne doit contenir que des lettres.',
                    (v) => (v && v.length >= 2) || 'Le nom de famille doit comporter au moins 2 caractères.'
                ]
            },
            birthDate: {
                label: 'Date de naissance',
                value: null,
                rules: [
                    (v) => !!v || 'La date de naissance est requise.',
                    (v) => {
                        const date = new Date(v);
                        return !isNaN(date) || 'La date de naissance doit être une date valide.';
                    },
                    (v) => {
                        const date = new Date(v);
                        const age = new Date().getFullYear() - date.getFullYear();
                        return age >= 18 || 'Vous devez avoir au moins 18 ans.';
                    }
                ]
            },
            birthPlace: {
                label: 'Lieu de naissance',
                value: '',
                rules: [
                    (v) => !!v || 'Le lieu de naissance est requis.',
                    (v) =>
                        /^[a-zA-ZÀ-ÖØ-öø-ÿ ,.'-]+$/.test(v) ||
                        'Le lieu de naissance ne doit contenir que des lettres et des espaces.',
                    (v) => (v && v.length >= 2) || 'Le lieu de naissance doit comporter au moins 2 caractères.'
                ]
            },
            sexe: {
                label: 'Sexe',
                value: '',
                options: ['Masculin', 'Féminin'],
                rules: [
                    (v) => !!v || 'Le sexe est requis.',
                    (v) => ['Masculin', 'Féminin'].includes(v) || 'Le sexe doit être l’une des options valides.'
                ]
            },
            address: {
                label: 'Adresse',
                value: '',
                rules: [
                    (v) => !!v || 'L’adresse est requise.',
                    (v) => /^[a-zA-Z0-9À-ÖØ-öø-ÿ ,.'-]+$/.test(v) || 'L’adresse contient des caractères invalides.',
                    (v) => (v && v.length >= 5) || 'L’adresse doit comporter au moins 5 caractères.'
                ]
            },
            phone: {
                label: 'Téléphone',
                value: '',
                rules: [
                    (v) => !!v || 'Le numéro de téléphone est requis.',
                    (v) => /^\d{10}$/.test(v) || 'Le numéro de téléphone doit comporter 10 chiffres.'
                ]
            },
            fatherFirstName: {
                label: 'Prénom père',
                value: '',
                rules: [
                    (v) => !!v || 'Le prénom du père est requis.',
                    (v) => /^[a-zA-ZÀ-ÖØ-öø-ÿ -]+$/.test(v) || 'Le prénom ne doit contenir que des lettres.',
                    (v) => (v && v.length >= 2) || 'Le prénom doit comporter au moins 2 caractères.'
                ]
            },
            motherFirstName: {
                label: 'Prénom et nom Mère',
                value: '',
                rules: [
                    (v) => !!v || 'Le nom complet de la mère est requis.',
                    (v) =>
                        /^[a-zA-ZÀ-ÖØ-öø-ÿ ,.'-]+$/.test(v) ||
                        'Le nom complet de la mère ne doit contenir que des lettres et des espaces.',
                    (v) => (v && v.length >= 5) || 'Le nom complet de la mère doit comporter au moins 5 caractères.',
                    (v) => (v && v.length <= 100) || 'Le nom complet de la mère ne doit pas dépasser 100 caractères.'
                ]
            },
            tutorFullName: {
                label: 'Prénom & Nom Tuteur',
                value: '',
                rules: [
                    (v) => !!v || 'Le nom complet du tuteur est requis.',
                    (v) =>
                        /^[a-zA-ZÀ-ÖØ-öø-ÿ ,.'-]+$/.test(v) ||
                        'Le nom complet du tuteur ne doit contenir que des lettres et des espaces.',
                    (v) => (v && v.length >= 5) || 'Le nom complet du tuteur doit comporter au moins 5 caractères.',
                    (v) => (v && v.length <= 100) || 'Le nom complet du tuteur ne doit pas dépasser 100 caractères.'
                ]
            },
            tutorPhone: {
                label: 'Numéro de tel Tuteur',
                value: '',
                rules: [
                    (v) => !!v || 'Le numéro de téléphone du tuteur est requis.',
                    (v) => /^\d{10}$/.test(v) || 'Le numéro de téléphone du tuteur doit comporter 10 chiffres.'
                ]
            }
        }
    }),
    methods: {
        submit() {
          this.loading = true
            try {
              const validity = this.$refs.form.validate();
              if (validity) {
                const data = {
                  fileNumber: this.formData.fileNumber.value,
                  firstName: this.formData.firstName.value,
                  lastName: this.formData.lastName.value,
                  birthDate: this.formData.birthDate.value,
                  birthPlace: this.formData.birthPlace.value,
                  sexe: this.formData.sexe.value,
                  address: this.formData.address.value,
                  phone: this.formData.phone.value,
                  fatherFirstName: this.formData.fatherFirstName.value,
                  motherFirstName: this.formData.motherFirstName.value,
                  tutorFullName: this.formData.tutorFullName.value,
                  tutorPhone: this.formData.tutorPhone.value
                };
                console.log(data);
                // this.clientStore.addStudent(data)
              }
            } catch (err) {
              console.error(err)
            } finally {
              this.loading = false
            }
        },
        togglePasswordVisibility() {
            this.visible = !this.visible;
        }
    },
    created() {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 2000);
    },
    computed: {
        classId() {
            return this.$route.query.classId;
        },
        classData() {
            const getClassById = this.clientStore.getClassById;
            return getClassById(this.classId);
        },
        showEmpyState() {
            return !this.classId;
        },
        // formattedBirthDate() {
        //     return this.formData.birthDate.value ? new Date(this.formData.birthDate.value).toLocaleDateString('fr-FR') : '';
        // },
        dateFieldComputed() {
            return this.formData.birthDate.value ? this.$longDateFormat(this.formData.birthDate.value) : '';
        }
    }
};
</script>
<style scoped>
.v-toolbar__content,
.v-toolbar__extension {
    display: block;
}
</style>
