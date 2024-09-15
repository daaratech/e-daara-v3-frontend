<template>
    <v-container fluid class="pa-1">
        <v-main class="pa-0">
            <router-view />
        </v-main>
    </v-container>
</template>
<script>
export default {
    name: 'StudentContainer',
    mounted() {
        console.log('StudentContainer mounted');
    }
};
</script>
