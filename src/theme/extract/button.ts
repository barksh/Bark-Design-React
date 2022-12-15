/**
 * @author WMXPY
 * @namespace Theme_Extract
 * @description Button
 */

import { BarkTheme, BarkThemeObject, BARK_THEME_VARIANT } from "../declare";
import { extractVariantFromObject } from "../util/extract";

export const extractButtonTheme = (
    theme: BarkTheme,
    variant: BARK_THEME_VARIANT,
): BarkThemeObject<"button"> => {

    return {
        foreColor: extractVariantFromObject(
            variant,
            theme.button?.foreColor,
            theme.global.foreColor,
        ),
        backColor: extractVariantFromObject(
            variant,
            theme.button?.backColor,
            theme.global.backColor,
        ),
    };
};
