// Utilities
import { defineStore } from 'pinia';

export const useClientStore = defineStore('client', {
    state: () => ({
        client: {
            classes: [],
            students: [],
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
                this.client.students = [
                  {
                    id: "student_001",
                    firstName: "Student1",
                    lastName: "LastName1",
                    birthDate: "2000-09-21T00:00:00Z",
                    class: {
                      id: "class_010",
                      name: "Troisieme A",
                      shortName: "3eA"
                    },
                    absences: [
                      {
                        id: "absence_001",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_002",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_003",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-02-13T00:00:00Z"
                  },
                  {
                    id: "student_002",
                    firstName: "Student2",
                    lastName: "LastName2",
                    birthDate: "2000-08-15T00:00:00Z",
                    class: {
                      id: "class_022",
                      name: "Sixieme C",
                      shortName: "6emC"
                    },
                    absences: [
                      {
                        id: "absence_004",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_005",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_006",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2023-09-02T00:00:00Z"
                  },
                  {
                    id: "student_003",
                    firstName: "Student3",
                    lastName: "LastName3",
                    birthDate: "2000-08-15T00:00:00Z",
                    class: {
                      id: "class_018",
                      name: "Cinquieme B",
                      shortName: "5eB"
                    },
                    absences: [
                      {
                        id: "absence_007",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_008",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_009",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-09-13T00:00:00Z"
                  },
                  {
                    id: "student_004",
                    firstName: "Student4",
                    lastName: "LastName4",
                    birthDate: "2000-08-19T00:00:00Z",
                    class: {
                      id: "class_012",
                      name: "Troisieme B",
                      shortName: "3eB"
                    },
                    absences: [
                      {
                        id: "absence_010",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_011",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_012",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-07-10T00:00:00Z"
                  },
                  {
                    id: "student_005",
                    firstName: "Student5",
                    lastName: "LastName5",
                    birthDate: "2000-04-14T00:00:00Z",
                    class: {
                      id: "class_010",
                      name: "Troisieme A",
                      shortName: "3eA"
                    },
                    absences: [
                      {
                        id: "absence_013",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_014",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_015",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-01-28T00:00:00Z"
                  },
                  {
                    id: "student_006",
                    firstName: "Student6",
                    lastName: "LastName6",
                    birthDate: "2000-02-19T00:00:00Z",
                    class: {
                      id: "class_020",
                      name: "Sixieme A",
                      shortName: "6emA"
                    },
                    absences: [
                      {
                        id: "absence_016",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_017",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_018",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2020-07-23T00:00:00Z"
                  },
                  {
                    id: "student_007",
                    firstName: "Student7",
                    lastName: "LastName7",
                    birthDate: "2000-02-14T00:00:00Z",
                    class: {
                      id: "class_016",
                      name: "Quatrieme C",
                      shortName: "4emC"
                    },
                    absences: [
                      {
                        id: "absence_019",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_020",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_021",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-12-26T00:00:00Z"
                  },
                  {
                    id: "student_008",
                    firstName: "Student8",
                    lastName: "LastName8",
                    birthDate: "2000-10-01T00:00:00Z",
                    class: {
                      id: "class_021",
                      name: "Sixieme B",
                      shortName: "6emB"
                    },
                    absences: [
                      {
                        id: "absence_022",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_023",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_024",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-06-11T00:00:00Z"
                  },
                  {
                    id: "student_009",
                    firstName: "Student9",
                    lastName: "LastName9",
                    birthDate: "2000-07-05T00:00:00Z",
                    class: {
                      id: "class_014",
                      name: "Quatrieme A",
                      shortName: "4emA"
                    },
                    absences: [
                      {
                        id: "absence_025",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_026",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_027",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-08-15T00:00:00Z"
                  },
                  {
                    id: "student_010",
                    firstName: "Student10",
                    lastName: "LastName10",
                    birthDate: "2000-04-12T00:00:00Z",
                    class: {
                      id: "class_008",
                      name: "Seconde SB",
                      shortName: "sc.SB"
                    },
                    absences: [
                      {
                        id: "absence_028",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_029",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_030",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-10-12T00:00:00Z"
                  },
                  {
                    id: "student_011",
                    firstName: "Student11",
                    lastName: "LastName11",
                    birthDate: "2000-11-12T00:00:00Z",
                    class: {
                      id: "class_016",
                      name: "Quatrieme C",
                      shortName: "4emC"
                    },
                    absences: [
                      {
                        id: "absence_031",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_032",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_033",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2022-09-10T00:00:00Z"
                  },
                  {
                    id: "student_012",
                    firstName: "Student12",
                    lastName: "LastName12",
                    birthDate: "2000-10-20T00:00:00Z",
                    class: {
                      id: "class_004",
                      name: "Premiere S1",
                      shortName: "1erS1"
                    },
                    absences: [
                      {
                        id: "absence_034",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_035",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_036",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2022-04-14T00:00:00Z"
                  },
                  {
                    id: "student_013",
                    firstName: "Student13",
                    lastName: "LastName13",
                    birthDate: "2000-02-08T00:00:00Z",
                    class: {
                      id: "class_022",
                      name: "Sixieme C",
                      shortName: "6emC"
                    },
                    absences: [
                      {
                        id: "absence_037",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_038",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_039",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-02-27T00:00:00Z"
                  },
                  {
                    id: "student_014",
                    firstName: "Student14",
                    lastName: "LastName14",
                    birthDate: "2000-05-07T00:00:00Z",
                    class: {
                      id: "class_017",
                      name: "Cinquieme A",
                      shortName: "5eA"
                    },
                    absences: [
                      {
                        id: "absence_040",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_041",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_042",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2022-12-09T00:00:00Z"
                  },
                  {
                    id: "student_015",
                    firstName: "Student15",
                    lastName: "LastName15",
                    birthDate: "2000-04-03T00:00:00Z",
                    class: {
                      id: "class_006",
                      name: "Premiere S2B",
                      shortName: "1erS2B"
                    },
                    absences: [
                      {
                        id: "absence_043",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_044",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_045",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2022-03-26T00:00:00Z"
                  },
                  {
                    id: "student_016",
                    firstName: "Student16",
                    lastName: "LastName16",
                    birthDate: "2000-06-15T00:00:00Z",
                    class: {
                      id: "class_004",
                      name: "Premiere S1",
                      shortName: "1erS1"
                    },
                    absences: [
                      {
                        id: "absence_046",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_047",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_048",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-08-21T00:00:00Z"
                  },
                  {
                    id: "student_017",
                    firstName: "Student17",
                    lastName: "LastName17",
                    birthDate: "2000-12-04T00:00:00Z",
                    class: {
                      id: "class_022",
                      name: "Sixieme C",
                      shortName: "6emC"
                    },
                    absences: [
                      {
                        id: "absence_049",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_050",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_051",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2020-12-11T00:00:00Z"
                  },
                  {
                    id: "student_018",
                    firstName: "Student18",
                    lastName: "LastName18",
                    birthDate: "2000-11-23T00:00:00Z",
                    class: {
                      id: "class_008",
                      name: "Seconde SB",
                      shortName: "sc.SB"
                    },
                    absences: [
                      {
                        id: "absence_052",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_053",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_054",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2020-09-08T00:00:00Z"
                  },
                  {
                    id: "student_019",
                    firstName: "Student19",
                    lastName: "LastName19",
                    birthDate: "2000-08-22T00:00:00Z",
                    class: {
                      id: "class_002",
                      name: "Terminale S2A",
                      shortName: "TS2A"
                    },
                    absences: [
                      {
                        id: "absence_055",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_056",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_057",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-10-26T00:00:00Z"
                  },
                  {
                    id: "student_020",
                    firstName: "Student20",
                    lastName: "LastName20",
                    birthDate: "2000-11-15T00:00:00Z",
                    class: {
                      id: "class_015",
                      name: "Quatrieme B",
                      shortName: "4emB"
                    },
                    absences: [
                      {
                        id: "absence_058",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_059",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_060",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2020-01-21T00:00:00Z"
                  },
                  {
                    id: "student_021",
                    firstName: "Student21",
                    lastName: "LastName21",
                    birthDate: "2000-11-04T00:00:00Z",
                    class: {
                      id: "class_001",
                      name: "Terminale S1",
                      shortName: "TS1"
                    },
                    absences: [
                      {
                        id: "absence_061",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_062",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_063",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2023-05-28T00:00:00Z"
                  },
                  {
                    id: "student_022",
                    firstName: "Student22",
                    lastName: "LastName22",
                    birthDate: "2000-09-21T00:00:00Z",
                    class: {
                      id: "class_018",
                      name: "Cinquieme B",
                      shortName: "5eB"
                    },
                    absences: [
                      {
                        id: "absence_064",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_065",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_066",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2020-11-16T00:00:00Z"
                  },
                  {
                    id: "student_023",
                    firstName: "Student23",
                    lastName: "LastName23",
                    birthDate: "2000-07-16T00:00:00Z",
                    class: {
                      id: "class_016",
                      name: "Quatrieme C",
                      shortName: "4emC"
                    },
                    absences: [
                      {
                        id: "absence_067",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_068",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_069",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2022-10-09T00:00:00Z"
                  },
                  {
                    id: "student_024",
                    firstName: "Student24",
                    lastName: "LastName24",
                    birthDate: "2000-11-26T00:00:00Z",
                    class: {
                      id: "class_021",
                      name: "Sixieme B",
                      shortName: "6emB"
                    },
                    absences: [
                      {
                        id: "absence_070",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_071",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_072",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2020-04-26T00:00:00Z"
                  },
                  {
                    id: "student_025",
                    firstName: "Student25",
                    lastName: "LastName25",
                    birthDate: "2000-06-14T00:00:00Z",
                    class: {
                      id: "class_007",
                      name: "Seconde SA",
                      shortName: "sc.SA"
                    },
                    absences: [
                      {
                        id: "absence_073",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_074",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_075",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2020-04-07T00:00:00Z"
                  },
                  {
                    id: "student_026",
                    firstName: "Student26",
                    lastName: "LastName26",
                    birthDate: "2000-08-08T00:00:00Z",
                    class: {
                      id: "class_014",
                      name: "Quatrieme A",
                      shortName: "4emA"
                    },
                    absences: [
                      {
                        id: "absence_076",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_077",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_078",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2023-06-07T00:00:00Z"
                  },
                  {
                    id: "student_027",
                    firstName: "Student27",
                    lastName: "LastName27",
                    birthDate: "2000-03-12T00:00:00Z",
                    class: {
                      id: "class_001",
                      name: "Terminale S1",
                      shortName: "TS1"
                    },
                    absences: [
                      {
                        id: "absence_079",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_080",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_081",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-03-21T00:00:00Z"
                  },
                  {
                    id: "student_028",
                    firstName: "Student28",
                    lastName: "LastName28",
                    birthDate: "2000-06-24T00:00:00Z",
                    class: {
                      id: "class_013",
                      name: "Troisieme C",
                      shortName: "3eC"
                    },
                    absences: [
                      {
                        id: "absence_082",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_083",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_084",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-04-15T00:00:00Z"
                  },
                  {
                    id: "student_029",
                    firstName: "Student29",
                    lastName: "LastName29",
                    birthDate: "2000-08-27T00:00:00Z",
                    class: {
                      id: "class_013",
                      name: "Troisieme C",
                      shortName: "3eC"
                    },
                    absences: [
                      {
                        id: "absence_085",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_086",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_087",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-09-28T00:00:00Z"
                  },
                  {
                    id: "student_030",
                    firstName: "Student30",
                    lastName: "LastName30",
                    birthDate: "2000-07-03T00:00:00Z",
                    class: {
                      id: "class_004",
                      name: "Premiere S1",
                      shortName: "1erS1"
                    },
                    absences: [
                      {
                        id: "absence_088",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_089",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_090",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-03-19T00:00:00Z"
                  },
                  {
                    id: "student_031",
                    firstName: "Student31",
                    lastName: "LastName31",
                    birthDate: "2000-04-14T00:00:00Z",
                    class: {
                      id: "class_016",
                      name: "Quatrieme C",
                      shortName: "4emC"
                    },
                    absences: [
                      {
                        id: "absence_091",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_092",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_093",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2023-11-27T00:00:00Z"
                  },
                  {
                    id: "student_032",
                    firstName: "Student32",
                    lastName: "LastName32",
                    birthDate: "2000-05-19T00:00:00Z",
                    class: {
                      id: "class_013",
                      name: "Troisieme C",
                      shortName: "3eC"
                    },
                    absences: [
                      {
                        id: "absence_094",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_095",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_096",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-04-04T00:00:00Z"
                  },
                  {
                    id: "student_033",
                    firstName: "Student33",
                    lastName: "LastName33",
                    birthDate: "2000-05-24T00:00:00Z",
                    class: {
                      id: "class_012",
                      name: "Troisieme B",
                      shortName: "3eB"
                    },
                    absences: [
                      {
                        id: "absence_097",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_098",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_099",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-07-25T00:00:00Z"
                  },
                  {
                    id: "student_034",
                    firstName: "Student34",
                    lastName: "LastName34",
                    birthDate: "2000-02-10T00:00:00Z",
                    class: {
                      id: "class_003",
                      name: "Terminale S2B",
                      shortName: "TS2B"
                    },
                    absences: [
                      {
                        id: "absence_100",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_101",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_102",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2022-03-16T00:00:00Z"
                  },
                  {
                    id: "student_035",
                    firstName: "Student35",
                    lastName: "LastName35",
                    birthDate: "2000-04-07T00:00:00Z",
                    class: {
                      id: "class_010",
                      name: "Troisieme A",
                      shortName: "3eA"
                    },
                    absences: [
                      {
                        id: "absence_103",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_104",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_105",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2022-07-12T00:00:00Z"
                  },
                  {
                    id: "student_036",
                    firstName: "Student36",
                    lastName: "LastName36",
                    birthDate: "2000-04-03T00:00:00Z",
                    class: {
                      id: "class_016",
                      name: "Quatrieme C",
                      shortName: "4emC"
                    },
                    absences: [
                      {
                        id: "absence_106",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_107",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_108",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2020-05-18T00:00:00Z"
                  },
                  {
                    id: "student_037",
                    firstName: "Student37",
                    lastName: "LastName37",
                    birthDate: "2000-10-19T00:00:00Z",
                    class: {
                      id: "class_007",
                      name: "Seconde SA",
                      shortName: "sc.SA"
                    },
                    absences: [
                      {
                        id: "absence_109",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_110",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_111",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2022-11-23T00:00:00Z"
                  },
                  {
                    id: "student_038",
                    firstName: "Student38",
                    lastName: "LastName38",
                    birthDate: "2000-11-20T00:00:00Z",
                    class: {
                      id: "class_008",
                      name: "Seconde SB",
                      shortName: "sc.SB"
                    },
                    absences: [
                      {
                        id: "absence_112",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_113",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_114",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2023-01-11T00:00:00Z"
                  },
                  {
                    id: "student_039",
                    firstName: "Student39",
                    lastName: "LastName39",
                    birthDate: "2000-08-11T00:00:00Z",
                    class: {
                      id: "class_015",
                      name: "Quatrieme B",
                      shortName: "4emB"
                    },
                    absences: [
                      {
                        id: "absence_115",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_116",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_117",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2023-08-11T00:00:00Z"
                  },
                  {
                    id: "student_040",
                    firstName: "Student40",
                    lastName: "LastName40",
                    birthDate: "2000-01-17T00:00:00Z",
                    class: {
                      id: "class_015",
                      name: "Quatrieme B",
                      shortName: "4emB"
                    },
                    absences: [
                      {
                        id: "absence_118",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_119",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_120",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2021-12-07T00:00:00Z"
                  },
                  {
                    id: "student_041",
                    firstName: "Student41",
                    lastName: "LastName41",
                    birthDate: "2000-06-07T00:00:00Z",
                    class: {
                      id: "class_018",
                      name: "Cinquieme B",
                      shortName: "5eB"
                    },
                    absences: [
                      {
                        id: "absence_121",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_122",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_123",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2022-07-20T00:00:00Z"
                  },
                  {
                    id: "student_042",
                    firstName: "Student42",
                    lastName: "LastName42",
                    birthDate: "2000-06-05T00:00:00Z",
                    class: {
                      id: "class_014",
                      name: "Quatrieme A",
                      shortName: "4emA"
                    },
                    absences: [
                      {
                        id: "absence_124",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_125",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_126",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2022-12-24T00:00:00Z"
                  },
                  {
                    id: "student_043",
                    firstName: "Student43",
                    lastName: "LastName43",
                    birthDate: "2000-08-06T00:00:00Z",
                    class: {
                      id: "class_006",
                      name: "Premiere S2B",
                      shortName: "1erS2B"
                    },
                    absences: [
                      {
                        id: "absence_127",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_128",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_129",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2020-02-07T00:00:00Z"
                  },
                  {
                    id: "student_044",
                    firstName: "Student44",
                    lastName: "LastName44",
                    birthDate: "2000-01-02T00:00:00Z",
                    class: {
                      id: "class_018",
                      name: "Cinquieme B",
                      shortName: "5eB"
                    },
                    absences: [
                      {
                        id: "absence_130",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_131",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_132",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2023-11-20T00:00:00Z"
                  },
                  {
                    id: "student_045",
                    firstName: "Student45",
                    lastName: "LastName45",
                    birthDate: "2000-08-02T00:00:00Z",
                    class: {
                      id: "class_016",
                      name: "Quatrieme C",
                      shortName: "4emC"
                    },
                    absences: [
                      {
                        id: "absence_133",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_134",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_135",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2022-04-11T00:00:00Z"
                  },
                  {
                    id: "student_046",
                    firstName: "Student46",
                    lastName: "LastName46",
                    birthDate: "2000-09-08T00:00:00Z",
                    class: {
                      id: "class_008",
                      name: "Seconde SB",
                      shortName: "sc.SB"
                    },
                    absences: [
                      {
                        id: "absence_136",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_137",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_138",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2023-08-29T00:00:00Z"
                  },
                  {
                    id: "student_047",
                    firstName: "Student47",
                    lastName: "LastName47",
                    birthDate: "2000-01-28T00:00:00Z",
                    class: {
                      id: "class_004",
                      name: "Premiere S1",
                      shortName: "1erS1"
                    },
                    absences: [
                      {
                        id: "absence_139",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_140",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_141",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2020-05-04T00:00:00Z"
                  },
                  {
                    id: "student_048",
                    firstName: "Student48",
                    lastName: "LastName48",
                    birthDate: "2000-09-27T00:00:00Z",
                    class: {
                      id: "class_014",
                      name: "Quatrieme A",
                      shortName: "4emA"
                    },
                    absences: [
                      {
                        id: "absence_142",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_143",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_144",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2023-04-04T00:00:00Z"
                  },
                  {
                    id: "student_049",
                    firstName: "Student49",
                    lastName: "LastName49",
                    birthDate: "2000-06-26T00:00:00Z",
                    class: {
                      id: "class_017",
                      name: "Cinquieme A",
                      shortName: "5eA"
                    },
                    absences: [
                      {
                        id: "absence_145",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_146",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_147",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2022-10-18T00:00:00Z"
                  },
                  {
                    id: "student_050",
                    firstName: "Student50",
                    lastName: "LastName50",
                    birthDate: "2000-09-27T00:00:00Z",
                    class: {
                      id: "class_006",
                      name: "Premiere S2B",
                      shortName: "1erS2B"
                    },
                    absences: [
                      {
                        id: "absence_148",
                        date: "2023-01-01T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_149",
                        date: "2023-01-02T00:00:00Z",
                        reason: "Maladie"
                      },
                      {
                        id: "absence_150",
                        date: "2023-01-03T00:00:00Z",
                        reason: "Maladie"
                      }
                    ],
                    createdAt: "2022-11-01T00:00:00Z"
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
