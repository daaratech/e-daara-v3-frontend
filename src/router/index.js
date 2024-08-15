// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import { useAuthStore } from '@/stores/auth'

const routes = [
    /**
     * Authentication
     */
    {
        path: '/auth',
        meta: { requiresGuest: true },
        component: () => import('@/layouts/Auth.vue'),
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('@/views/auth/SignIn.vue'),
            },
        ]
    },

    /**
     * Application
     */
    {
        path: '/',
        meta: { requiresAuth: true },
        component: () => import('@/layouts/Main.vue'),
        children: [
            {
                path: 'dashboard',
                alias: '',
                name: 'dashboard',
                component: () => import('@/views/Dashboard.vue'),
            },
            {
                path: 'agenda',
                component: () => import('@/layouts/MainAgenda.vue'),
                children: [
                    {
                        path: '',
                        name: 'agenda-index',
                        component: () => import('@/views/agenda/Index.vue'),
                    }
                ]
            },
            {
                path: 'evaluation',
                component: () => import('@/layouts/MainEvaluation.vue'),
                children: [
                    {
                        path: '',
                        name: 'evaluation-index',
                        component: () => import('@/views/evaluation/Index.vue'),
                    }
                ]
            },
            {
                path: 'finance',
                component: () => import('@/layouts/MainFinance.vue'),
                children: [
                    {
                        path: '',
                        name: 'finance-index',
                        component: () => import('@/views/finance/Index.vue'),
                    }
                ]
            },
            {
                path: 'pedagogie',
                component: () => import('@/layouts/MainPedagogie.vue'),
                children: [
                    {
                        path: '',
                        name: 'pedagogie-index',
                        component: () => import('@/views/pedagogie/Index.vue'),
                    }
                ]
            },
        ]
    },

    /**
     * Prepare Workspace
     */
    {
        path: '/prepare-workspace',
        name: 'prepare-workspace',
        component: () => import('@/views/PrepareWorkspace.vue')
    },

    /**
     * 404
     */
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue')
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(import.meta.env.BASE_URL),
    extendRoutes: setupLayouts,
})

router.beforeEach((to, from, next) => {
    const isLoggedIn = useAuthStore().user.loggedIn;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const requiresGuest = to.matched.some(record => record.meta.requiresGuest);

    if (requiresAuth && !isLoggedIn) {
        console.log("You are not authorized to access this area.");
        next({ name: "login" });
    } if (requiresGuest && isLoggedIn) {
        console.log("You are already logged");
        next({ name: 'dashboard' });
    } else {
        next();
    }
});

export default router
