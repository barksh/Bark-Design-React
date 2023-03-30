/**
 * @author WMXPY
 * @namespace Theme_Template
 * @description Dark
 */

import { BarkThemeProfile } from "../declare";

export const defaultDartThemeProfile: BarkThemeProfile = {

    foreColor: {
        primary: '#ffffff',
    },
    backColor: {
        primary: '#000000',
        active: '#a9c0de',
        emphasize: '#eeeeff',
        disabled: '#dddddd',
        palette: [
            '#4d455d',
            '#e96479',
            '#f5e9Cf',
            '#7db9b6',
        ],
    },
    borderColor: {
        primary: '#01FF70',
        secondary: '#4444BB',
        focus: '#a9c0de',
        active: '#2a7ae2',
    },
    textColor: {
        primary: '#ffffff',
        secondary: '#888888',
        warning: '#ffb700',
        error: '#ff0000',
        action: '#2a7ae2',
    },
};
