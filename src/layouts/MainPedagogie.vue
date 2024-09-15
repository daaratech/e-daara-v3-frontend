<template>
    <v-app-bar
        id="test"
        elevation="1"
        color="#eeeeee"
        :height="showSupInfo ? 200 : 56"
    >
        <v-sheet color="#eeeeee" class="ma-2">
            <v-fade-transition>
              <v-container v-show="showSupInfo">
                <h4 class="text-center">Infos Utils</h4>
                <div fluid>
                    <v-row>
                        <v-col cols="12" md="4" lg="3">
                            <v-card color="#385F73" class="pb-5">
                                <v-card-title class="text-h5">
                                    Unlimited music now
                                </v-card-title>

                                <v-card-subtitle>
                                    Listen to your favorite artists and albums whenever
                                    and wherever, online and offline.
                                </v-card-subtitle>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="4" lg="3">
                            <v-card color="#385F73" class="pb-5">
                                <v-card-title class="text-h5">
                                    Unlimited music now
                                </v-card-title>

                                <v-card-subtitle>
                                    Listen to your favorite artists and albums whenever
                                    and wherever, online and offline.
                                </v-card-subtitle>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="4" lg="3">
                            <v-card color="#385F73" class="pb-5">
                                <v-card-title class="text-h5">
                                    Unlimited music now
                                </v-card-title>

                                <v-card-subtitle>
                                    Listen to your favorite artists and albums whenever
                                    and wherever, online and offline.
                                </v-card-subtitle>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="4" lg="3">
                            <v-card color="#385F73" class="pb-5">
                                <v-card-title class="text-h5">
                                    Unlimited music now
                                </v-card-title>

                                <v-card-subtitle>
                                    Listen to your favorite artists and albums whenever
                                    and wherever, online and offline.
                                </v-card-subtitle>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
              </v-container>
            </v-fade-transition>
            <v-tabs v-model="tabs" height="50">
                <v-tab
                    v-for="(tab, key) in pedagogieMenu"
                    :key="key"
                    :to="{ name: tab.routeName }"
                    exact
                >
                    {{ tab.name }}
                </v-tab>
            </v-tabs>
        </v-sheet>
    </v-app-bar>
    <v-container fluid class="pa-0">
        <!-- <v-sheet elevation="1" color="#eeeeee" class="ma-2">
            <h4 class="text-center">Infos Utils</h4>
            <v-container fluid>
                <v-row>
                    <v-col cols="12" md="4" lg="3">
                        <v-card color="#385F73" class="pb-5">
                            <v-card-title class="text-h5">
                                Unlimited music now
                            </v-card-title>

                            <v-card-subtitle>
                                Listen to your favorite artists and albums whenever and
                                wherever, online and offline.
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4" lg="3">
                        <v-card color="#385F73" class="pb-5">
                            <v-card-title class="text-h5">
                                Unlimited music now
                            </v-card-title>

                            <v-card-subtitle>
                                Listen to your favorite artists and albums whenever and
                                wherever, online and offline.
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4" lg="3">
                        <v-card color="#385F73" class="pb-5">
                            <v-card-title class="text-h5">
                                Unlimited music now
                            </v-card-title>

                            <v-card-subtitle>
                                Listen to your favorite artists and albums whenever and
                                wherever, online and offline.
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4" lg="3">
                        <v-card color="#385F73" class="pb-5">
                            <v-card-title class="text-h5">
                                Unlimited music now
                            </v-card-title>

                            <v-card-subtitle>
                                Listen to your favorite artists and albums whenever and
                                wherever, online and offline.
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-tabs v-model="tabs">
                <v-tab
                    v-for="(tab, key) in pedagogieMenu"
                    :key="key"
                    :to="{ name: tab.routeName }"
                    exact
                >
                    {{ tab.name }}
                </v-tab>
            </v-tabs>
        </v-sheet> -->
        <v-tabs-window v-model="tabs">
            <v-tabs-window-item
                v-for="(tab, key) in pedagogieMenu"
                :key="key"
                :value="$router.resolve({ name: tab.routeName }).href"
            >
                <component :is="tab.component" v-bind="tab.args"></component>
            </v-tabs-window-item>
        </v-tabs-window>
    </v-container>
</template>

<script>
import { useAppStore } from '@/stores/app';
import HomeIndex from '@/views/pedagogie/HomeIndex.vue';
import ClasseContainer from '@/views/pedagogie/ClasseContainer.vue';
import StudentIndex from '@/views/pedagogie/StudentIndex.vue';
import ProfessorIndex from '@/views/pedagogie/ProfessorIndex.vue';

export default {
    components: { HomeIndex, ClasseContainer, StudentIndex, ProfessorIndex },
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
                component: 'ClasseContainer'
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
        ],
        showSupInfo: true
    }),
    computed: {
        leftWidth() {
            return this.appStore.frontendConfigs.sidebars.leftWidth;
        },
        rightWidth() {
            return this.appStore.frontendConfigs.sidebars.rightWidth;
        }
    },
    mounted() {
        console.log(this.$route.name);
        console.log(this.showSupInfo)

    },
    watch: {
        $route(to) {
            console.log(to.name);
            console.log(this.showSupInfo);
            if (!this.pedagogieMenu.find((tab) => tab.routeName === to.name)) {
                this.showSupInfo = false;
            } else {
                this.showSupInfo = true;
            }
        }
    }
};
</script>
