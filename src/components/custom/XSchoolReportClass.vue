<template>
    <v-data-table
        fixed-header
        hide-default-footer
        hover
        :search="search"
        :height="tableHeight"
        :headers="headers"
        :items="desserts"
        item-key="name"
        items-per-page="-1"
        class="bg-transparent"
    ></v-data-table>
</template>

<script>
export default {
    props: {
        search: { type: String, default: null }
    },
    data: () => ({
        headers: [
            { title: 'Etudiants', value: 'student_fullname' },
            { width: '2%' },
            {
                title: 'Semestre I',
                align: 'center',
                children: [
                    { title: 'Devoir 1', value: 's1dev1', width: '8%' },
                    { title: 'Devoir 2', value: 's1dev2', width: '8%' },
                    { title: 'Examen', value: 's1exam', width: '8%' }
                ]
            },
            { width: '2%' },
            {
                title: 'Semestre II',
                align: 'center',
                children: [
                    { title: 'Devoir 1', value: 's2dev1', width: '8%' },
                    { title: 'Devoir 2', value: 's2dev2', width: '8%' },
                    { title: 'Examen', value: 's2exam', width: '8%' }
                ]
            }
        ],
        desserts: []
    }),
    computed: {
        tableHeight() {
            return window.innerHeight * 0.82;
        }
    },
    created() {
        for (let i = 0; i < 30; i++) {
            this.desserts.push({
                student_fullname: `Fullname Student ${i + 1}`,
                s1dev1: '14',
                s1dev2: '14',
                s1exam: '14',
                s2dev1: '20',
                s2dev2: '17',
                s2exam: '14'
            });
        }
    }
};
</script>
