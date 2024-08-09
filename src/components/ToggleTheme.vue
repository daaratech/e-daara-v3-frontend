<template>
    <v-switch
        :model-value="isDarkTheme"
        hide-details
        inset
        color="blue-darken-1"
        @update:modelValue="toggleTheme"
    ></v-switch>
</template>
  
<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { storageTheme } from '@/storage'

const theme = useTheme()

const isDarkTheme = computed(() => {
    return theme.global.current.value.dark
})

function toggleTheme () {
    const themeName = theme.global.current.value.dark ? 'light' : 'dark'
    theme.global.name.value = themeName
    storageTheme.set(themeName)
}
</script>
  