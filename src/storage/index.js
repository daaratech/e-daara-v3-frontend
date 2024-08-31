/**
 * Theme
 */
const THEME = 'theme';

export const storageTheme = {
    get: function () {
        return localStorage.getItem(THEME) || 'dark';
    },

    set: function (theme) {
        localStorage.setItem(THEME, theme);
    }
};
