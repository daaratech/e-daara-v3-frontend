<template>
    <div>test Home Index</div>
</template>

<script>
import { useClientStore } from '@/stores/client';

export default {
    data: () => ({
        clientStore: useClientStore(),
        tab: null,
        loading: false
    }),
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
        }
    }
};
</script>
