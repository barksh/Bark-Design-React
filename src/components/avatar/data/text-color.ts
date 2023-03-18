/**
 * @author WMXPY
 * @namespace Components_Avatar_Data
 * @description Text Color
 */

export const getTextColorByColor = (
    color: string,
): '#ffffff' | '#000000' => {

    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    if (yiq >= 128) {
        return '#000000';
    }
    return '#ffffff';
};
