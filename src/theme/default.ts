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
    },
    borderColor: {
        primary: '#4444BB',
    },
    textColor: {
        primary: '#000000',
        secondary: '#AAAAAA',
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
