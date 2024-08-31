// Utilities
import { defineStore } from 'pinia';

export const useClientStore = defineStore('client', {
    state: () => ({
        client: {
            classes: [],
            finances_buckets: []
        }
    }),

    getters: {
        getClassById: (state) => {
            return (classId) =>
                state.client.classes.find((_class) => _class.id === classId);
        },

        getFinanceBucketById: (state) => {
            return (fbId) => state.client.finances_buckets.find((fb) => fb.id === fbId);
        }
    },

    actions: {
        async getClientData() {
            return new Promise((resolve, reject) => {
                this.client.classes = [
                    {
                        id: 'class_001',
                        name: 'Terminale S1',
                        shortName: 'TS1',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_002',
                        name: 'Terminale S2A',
                        shortName: 'TS2A',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_003',
                        name: 'Terminale S2B',
                        shortName: 'TS2B',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_004',
                        name: 'Premiere S1',
                        shortName: '1erS1',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_005',
                        name: 'Premiere S2A',
                        shortName: '1erS2A',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_006',
                        name: 'Premiere S2B',
                        shortName: '1erS2B',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_007',
                        name: 'Seconde SA',
                        shortName: 'sc.SA',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_008',
                        name: 'Seconde SB',
                        shortName: 'sc.SB',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_009',
                        name: 'Seconde SC',
                        shortName: 'sc.SC',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_010',
                        name: 'Troisieme A',
                        shortName: '3eA',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_012',
                        name: 'Troisieme B',
                        shortName: '3eB',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_013',
                        name: 'Troisieme C',
                        shortName: '3eC',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_014',
                        name: 'Quatrieme A',
                        shortName: '4emA',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_015',
                        name: 'Quatrieme B',
                        shortName: '4emB',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_016',
                        name: 'Quatrieme C',
                        shortName: '4emC',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_017',
                        name: 'Cinquieme A',
                        shortName: '5eA',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_018',
                        name: 'Cinquieme B',
                        shortName: '5eB',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_019',
                        name: 'Cinquieme C',
                        shortName: '5eC',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_020',
                        name: 'Sixieme A',
                        shortName: '6emA',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_021',
                        name: 'Sixieme B',
                        shortName: '6emB',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    },
                    {
                        id: 'class_022',
                        name: 'Sixieme C',
                        shortName: '6emC',
                        createdAt: createRandomDate(),
                        students: Array.from(
                            { length: Math.ceil(Math.random() * 10) },
                            (_, i) => ({
                                id: `student_${i}`,
                                name: `Student ${i}`
                            })
                        ),
                        professors: Array.from(
                            { length: Math.ceil(Math.random() * 5) },
                            (_, i) => ({
                                id: `professor_${i}`,
                                name: `Professor ${i}`
                            })
                        )
                    }
                ];
                this.client.finances_buckets = [
                    {
                        id: 'finance_bucket_001',
                        title: 'Inscription',
                        desc: "Paiements des frais d'inscription"
                    },
                    {
                        id: 'finance_bucket_002',
                        title: 'Mensualite Janvier 2024',
                        desc: 'Mensualite Janvier 2024'
                    },
                    {
                        id: 'finance_bucket_003',
                        title: 'Mensualite Fevrier 2024',
                        desc: 'Mensualite Fevrier 2024'
                    },
                    {
                        id: 'finance_bucket_004',
                        title: 'Mensualite Mars 2024',
                        desc: 'Mensualite Mars 2024'
                    },
                    {
                        id: 'finance_bucket_006',
                        title: 'Mensualite Avril 2024',
                        desc: 'Mensualite Avril 2024'
                    }
                ];
                resolve();
            });
        }
    }
});

function createRandomDate() {
    const start = new Date(2023, 0, 1);
    const end = new Date(2024, 11, 31);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
