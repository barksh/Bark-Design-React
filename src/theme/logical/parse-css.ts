/**
 * @author WMXPY
 * @namespace Theme_Logical
 * @description Parse CSS
 */

import { cssPropertyMapping } from "./property-mapping";

export const parseLogicalCSSProperty = (property: keyof typeof cssPropertyMapping): string => {

    const mappingValue: string | undefined = cssPropertyMapping[property];

    if (typeof mappingValue === 'string') {
        return mappingValue;
    }
    return property;
};
