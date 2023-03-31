/**
 * @author WMXPY
 * @namespace Util
 * @description Size
 */

export type SizePropertyValue = 'small' | 'regular' | 'large';

export const fixSizeProps = (size?: SizePropertyValue): SizePropertyValue => {

    if (typeof size !== 'string') {
        return 'regular';
    }
    return size;
};

export const limitSizeProps = (
    size: SizePropertyValue | undefined,
    allowedValues: SizePropertyValue[],
    defaultValue: SizePropertyValue,
): SizePropertyValue => {

    if (typeof size !== 'string') {
        return defaultValue;
    }

    if (allowedValues.includes(size)) {
        return size;
    }
    return defaultValue;
};
