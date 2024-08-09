// Utilities
import { defineStore } from 'pinia'

export const useClientStore = defineStore('client', {
    state: () => ({
        client: {
            classes: [],
            finances_buckets: [],
        },
    }),

    getters: {
        getClassById: (state) => {
            return (classId) => state.client.classes.find(_class => _class.id === classId)
        },

        getFinanceBucketById: (state) => {
            return (fbId) => state.client.finances_buckets.find(fb => fb.id === fbId)
        },
    },

    actions: {
        async getClientData() {
            return new Promise((resolve, reject) => {
                this.client.classes = [
                    { id: 'class_001', name: 'Terminale S1', shortName: 'TS1' },
                    { id: 'class_002', name: 'Terminale S2A', shortName: 'TS2A' },
                    { id: 'class_003', name: 'Terminale S2B', shortName: 'TS2B' },
                    { id: 'class_004', name: 'Premiere S1', shortName: '1erS1' },
                    { id: 'class_005', name: 'Premiere S2A', shortName: '1erS2A' },
                    { id: 'class_006', name: 'Premiere S2B', shortName: '1erS2B' },
                    { id: 'class_007', name: 'Seconde SA', shortName: 'sc.SA' },
                    { id: 'class_008', name: 'Seconde SB', shortName: 'sc.SB' },
                    { id: 'class_009', name: 'Seconde SC', shortName: 'sc.SC' },
                    { id: 'class_010', name: 'Troisieme A', shortName: '3eA' },
                    { id: 'class_012', name: 'Troisieme B', shortName: '3eB' },
                    { id: 'class_013', name: 'Troisieme C', shortName: '3eC' },
                    { id: 'class_014', name: 'Quatrieme A', shortName: '4emA' },
                    { id: 'class_015', name: 'Quatrieme B', shortName: '4emB' },
                    { id: 'class_016', name: 'Quatrieme C', shortName: '4emC' },
                    { id: 'class_017', name: 'Cinquieme A', shortName: '5eA' },
                    { id: 'class_018', name: 'Cinquieme B', shortName: '5eB' },
                    { id: 'class_019', name: 'Cinquieme C', shortName: '5eC' },
                    { id: 'class_020', name: 'Sixieme A', shortName: '6emA' },
                    { id: 'class_021', name: 'Sixieme B', shortName: '6emB' },
                    { id: 'class_022', name: 'Sixieme C', shortName: '6emC' },
                ]
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
                    },
                ]
                resolve()
            })
        },
    },
})
