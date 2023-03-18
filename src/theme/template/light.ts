/**
 * @author WMXPY
 * @namespace Theme_Template
 * @description Light
 */

import { BarkThemeProfile } from "../declare";

export const defaultLightThemeProfile: BarkThemeProfile = {

    foreColor: {
        primary: '#000000',
    },
    backColor: {
        primary: '#ffffff',
        active: '#a9c0de',
        emphasize: '#eeeeff',
        palette: [
            '#4d455d',
            '#e96479',
            '#f5e9Cf',
            '#7db9b6',
        ],
    },
    borderColor: {
        primary: '#4444BB',
        focus: '#a9c0de',
        active: '#2a7ae2',
    },
    textColor: {
        primary: '#000000',
        secondary: '#888888',
        warning: '#ffb700',
        error: '#ff0000',
        action: '#2a7ae2',
    },
};
