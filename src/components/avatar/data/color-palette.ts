/**
 * @author WMXPY
 * @namespace Components_Avatar_Data
 * @description Color Palette
 */

export const getColorPaletteFromName = (
    name: string | undefined,
    colorPalette: string[],
): string => {

    if (typeof name !== 'string'
        || name.length === 0) {
        return colorPalette[0];
    }

    const nameValue: number = name.split('')
        .reduce((previous: number, current: string) => {
            return previous + current.charCodeAt(0);
        }, 0);

    return colorPalette[nameValue % colorPalette.length];
};
