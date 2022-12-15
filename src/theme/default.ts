/**
 * @author WMXPY
 * @namespace Theme
 * @description Default
 */

import { BarkTheme } from "./declare";

export const combineBarkDefaultTheme = (theme?: BarkTheme): BarkTheme => {

    if (theme) {
        return theme;
    }

    return {
        global: {
            foreColor: {
                primary: '#000000',
            },
            backColor: {
                primary: '#FFFFFF',
            },
        },
    };
};
