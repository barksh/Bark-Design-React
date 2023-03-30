/**
 * @author WMXPY
 * @namespace Theme
 * @description Default
 */

import { BarkTheme, BarkThemeMode, BarkThemeProfile } from "./declare";
import { defaultDartThemeProfile } from "./template/dart";
import { defaultLightThemeProfile } from "./template/light";

export const getBarkThemeProfile = (mode: BarkThemeMode, theme?: Partial<BarkTheme>): BarkThemeProfile => {

    if (mode === 'light') {

        if (theme) {

            if (theme.light) {
                return theme.light;
            }
            if (theme.dark) {
                return theme.dark;
            }
        }
        return defaultLightThemeProfile;
    }

    if (mode === 'dark') {

        if (theme) {

            if (theme.dark) {
                return theme.dark;
            }
            if (theme.light) {
                return theme.light;
            }
        }
        return defaultDartThemeProfile;
    }
    return defaultLightThemeProfile;
};
