/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';
import { VCalendar } from 'vuetify/labs/VCalendar';
import { storageTheme } from '@/storage';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    components: {
        VCalendar
    },
    theme: {
        defaultTheme: storageTheme.get()
    }
});
