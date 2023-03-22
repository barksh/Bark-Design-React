/**
 * @author WMXPY
 * @namespace Util
 * @description Hex To RGBA
 */


export const convertHexToRGBA = (hex: string, opacity: number): string => {

    const fixedHex = hex.replace('#', '');
    const r = parseInt(fixedHex.substring(0, 2), 16);
    const g = parseInt(fixedHex.substring(2, 4), 16);
    const b = parseInt(fixedHex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
