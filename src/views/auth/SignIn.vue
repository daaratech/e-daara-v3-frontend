<template>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" width="448" rounded="lg">
        <v-form @submit.prevent="submit">
            <div class="text-subtitle-1 text-medium-emphasis">Account</div>

            <v-text-field
                v-model="formData.email"
                placeholder="Email address"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
            ></v-text-field>

            <div
                class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
                Password
                <a
                    class="text-caption text-decoration-none font-weight-medium text-blue-darken-3"
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Forgot login password?
                </a>
            </div>

            <v-text-field
                v-model="formData.password"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                placeholder="Enter your password"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                @click:append-inner="visible = !visible"
            ></v-text-field>

            <v-btn
                class="text-none text-subtitle-1 mb-8"
                color="blue-darken-3"
                size="large"
                variant="flat"
                type="submit"
                block
                :loading="loading"
            >
                Connexion
            </v-btn>
        </v-form>

        <v-card-text class="text-center">
            <a
                class="text-blue-darken-3 text-decoration-none font-weight-bold"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
            >
                Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
            </a>
        </v-card-text>
    </v-card>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

export default {
    data: () => ({
        authStore: useAuthStore(),
        loading: false,
        visible: false,
        formData: {
            email: 'oumar@edaara.io',
            password: 'oumar@edaara.io'
        }
    }),
    methods: {
        submit() {
            this.loading = true;
            this.authStore.logIn().then(() => {
                setTimeout(() => {
                    this.loading = false;
                    this.$router.push({ name: 'prepare-workspace' });
                }, 3000);
            });
        }
    }
};
</script>
