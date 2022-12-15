/**
 * @author WMXPY
 * @namespace Theme_Util
 * @description Extract
 */

import { BarkThemeVariantObject, BARK_THEME_VARIANT } from "../declare";

export const extractVariantFromObject = (
    variant: BARK_THEME_VARIANT,
    ...objects: Array<BarkThemeVariantObject | undefined>
): string => {

    for (const object of objects) {

        if (typeof object !== 'undefined') {

            if (typeof object[variant] !== 'undefined') {
                return object[variant];
            }
        }
    }
    return '';
};
