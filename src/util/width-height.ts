/**
 * @author WMXPY
 * @namespace Util
 * @description Width Height
 */

export type SizePropertyValue = 'small' | 'regular' | 'large';

export const fixWidthHeight = (widthHeight: number | string): string => {

    if (typeof widthHeight === 'number') {
        return `${widthHeight}px`;
    }
    if (typeof widthHeight === 'string') {
        return widthHeight;
    }
    return "fit-content";
};
