// Utilities
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
    state: () => ({
        appName: 'E-Daara',
        appVersion: 'v0.0.0',
        frontendConfigs: {
            sidebars: {
                leftWidth: 250,
                rightWidth: 320
            }
        }
    })
});
