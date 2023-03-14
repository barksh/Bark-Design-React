/**
 * @author WMXPY
 * @namespace Theme
 * @description Default
 */

import { BarkTheme, BarkThemeProfile } from "./declare";
import { defaultLightThemeProfile } from "./template/light";

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
