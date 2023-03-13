/**
 * @author WMXPY
 * @namespace Theme
 * @description Default
 */

import { BarkTheme, BarkThemeProfile } from "./declare";

const defaultLightThemeProfile: BarkThemeProfile = {
    foreColor: {
        primary: '#000000',
    },
    backColor: {
        primary: '#FFFFFF',
        active: '#a9c0de',
    },
    borderColor: {
        primary: '#4444BB',
        active: '#2a7ae2',
    },
    textColor: {
        primary: '#000000',
        secondary: '#888888',
        action: '#2a7ae2',
    },
};

export const getBarkThemeProfile = (theme?: Partial<BarkTheme>): BarkThemeProfile => {

    if (theme) {

        if (theme.light) {
            return theme.light;
        }
        if (theme.dark) {
            return theme.dark;
        }
    }
    return defaultLightThemeProfile;
};
