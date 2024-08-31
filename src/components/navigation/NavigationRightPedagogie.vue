<template>
    <x-calendar type="day"></x-calendar>
</template>

<script>
import { useClientStore } from '@/stores/client';

export default {
    data: () => ({
        clientStore: useClientStore()
    })
};
</script>
