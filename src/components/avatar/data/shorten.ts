/**
 * @author WMXPY
 * @namespace Components_Avatar_Data
 * @description Shorten
 */

export const shortenAvatarName = (name: string): string => {

    const split: string[] = name.split(' ');

    if (split.length === 1) {

        if (split[0].length > 2) {

            return split[0].substring(0, 2);
        }
        return split[0];
    }

    const first: string = split[0];
    const last: string = split[split.length - 1];

    return `${first[0]}${last[0]}`;
};
