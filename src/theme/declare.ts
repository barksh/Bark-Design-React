/**
 * @author WMXPY
 * @namespace Theme
 * @description Declare
 */

export type BarkThemeRole = {

    readonly primary: string;
};

export type BarkTheme = {

    readonly global: {
        readonly foreColor: BarkThemeRole;
        readonly backColor: BarkThemeRole;
    };
};

export type BarkThemeProps<Rest extends Record<string, any> = {}> = {

    readonly theme: BarkTheme;
} & Rest;
