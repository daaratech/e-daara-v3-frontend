// Utilities
import { defineStore, getActivePinia } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: {
            loggedIn: false,
            data: null
        }
    }),

    actions: {
        async logIn() {
            return new Promise((resolve, reject) => {
                this.user.data = {
                    avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
                    email: "oumar@edaara.io",
                    fullname: "Oumar"
                }
                this.user.loggedIn = true
                resolve()
            })
        },

        async logOut() {
            return new Promise((resolve, reject) => {
                getActivePinia()._s.forEach(store => store.$reset())
                resolve()
            })
        },
    },
})
