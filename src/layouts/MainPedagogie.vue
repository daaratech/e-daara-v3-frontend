<template>
    <v-container fluid class="pa-0">
        <v-sheet elevation="1" color="#eeeeee" class="ma-2">
            <h4 class="text-center">Infos Utils</h4>
            <v-container fluid>
                <v-row>
                    <v-col cols="12" md="4" lg="3">
                        <v-card color="#385F73" class="pb-5">
                            <v-card-title class="text-h5"> Unlimited music now </v-card-title>

                            <v-card-subtitle>
                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4" lg="3">
                        <v-card color="#385F73" class="pb-5">
                            <v-card-title class="text-h5"> Unlimited music now </v-card-title>

                            <v-card-subtitle>
                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4" lg="3">
                        <v-card color="#385F73" class="pb-5">
                            <v-card-title class="text-h5"> Unlimited music now </v-card-title>

                            <v-card-subtitle>
                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4" lg="3">
                        <v-card color="#385F73" class="pb-5">
                            <v-card-title class="text-h5"> Unlimited music now </v-card-title>

                            <v-card-subtitle>
                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-tabs v-model="tabs">
                <v-tab v-for="(tab, key) in pedagogieMenu" :key="key" :to="{ name: tab.routeName }" exact>
                    {{ tab.name }}
                </v-tab>
            </v-tabs>
        </v-sheet>
        <v-tabs-window v-model="tabs">
            <v-tabs-window-item
                v-for="(tab, key) in pedagogieMenu"
                :key="key"
                :value="$router.resolve({ name: tab.routeName }).href"
            >
                <!-- <div class="overline" style="min-height: 2rem">{{ tab.name }}</div> -->
                <component :is="tab.component" v-bind="tab.args"></component>
            </v-tabs-window-item>
        </v-tabs-window>
    </v-container>
</template>

<script>
import { useAppStore } from '@/stores/app';
import HomeIndex from '@/views/pedagogie/HomeIndex.vue'
import ClasseIndex from '@/views/pedagogie/ClasseIndex.vue'
import StudentIndex from '@/views/pedagogie/StudentIndex.vue'
import ProfessorIndex from '@/views/pedagogie/ProfessorIndex.vue'

export default {
  components: { HomeIndex, ClasseIndex, StudentIndex, ProfessorIndex },
    data: () => ({
        appStore: useAppStore(),
        tabs: null,
        pedagogieMenu: [
            {
                name: 'Accueil',
                routeName: 'PedagogieIndex',
                component: 'HomeIndex'
            },
            {
                name: 'Classes',
                routeName: 'ClasseIndex',
                component: 'ClasseIndex'
            },
            {
                name: 'Élèves',
                routeName: 'StudentIndex',
                component: 'StudentIndex'
            },
            {
                name: 'Enseignant',
                routeName: 'ProfessorIndex',
                component: 'ProfessorIndex'
            }
        ]
    }),
    computed: {
        leftWidth() {
            return this.appStore.frontendConfigs.sidebars.leftWidth;
        },
        rightWidth() {
            return this.appStore.frontendConfigs.sidebars.rightWidth;
        }
    }
};
</script>
