<template>
    <v-data-table
        :headers="headers"
        :items="desserts"
        item-key="name"
        items-per-page="-1"
        hide-default-footer
        class="bg-transparent"
    ></v-data-table>
</template>

<script>
export default {
    data: () => ({
        headers: [
            { title: 'Matieres', value: 'module_name' },
            { title: 'Coefficient', value: 'module_coef', align: 'center', width: '8%' },
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
        desserts: [
            {
                module_name: 'Matiere 01',
                module_coef: '2',
                s1dev1: '14',
                s1dev2: '14',
                s1exam: '14',
                s2dev1: '20',
                s2dev2: '17',
                s2exam: '14'
            },
            {
                module_name: 'Matiere 02',
                module_coef: '2',
                s1dev1: '14',
                s1dev2: '14',
                s1exam: '14',
                s2dev1: '20',
                s2dev2: '17',
                s2exam: '14'
            },
            {
                module_name: 'Matiere 03',
                module_coef: '2',
                s1dev1: '14',
                s1dev2: '14',
                s1exam: '14',
                s2dev1: '20',
                s2dev2: '17',
                s2exam: '14'
            },
            {
                module_name: 'Matiere 05',
                module_coef: '2',
                s1dev1: '14',
                s1dev2: '14',
                s1exam: '14',
                s2dev1: '20',
                s2dev2: '17',
                s2exam: '14'
            },
            {
                module_name: 'Matiere 06',
                module_coef: '2',
                s1dev1: '14',
                s1dev2: '14',
                s1exam: '14',
                s2dev1: '20',
                s2dev2: '17',
                s2exam: '14'
            }
        ]
    })
};
</script>
