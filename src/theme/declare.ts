/**
 * @author WMXPY
 * @namespace Theme
 * @description Declare
 */

export enum BARK_THEME_VARIANT {

    PRIMARY = "primary",
    SECONDARY = "secondary",
}

export type BarkThemeVariantObject = Record<BARK_THEME_VARIANT, string>;

export type BarkThemeProfile = {

    readonly foreColor: {
        readonly primary: string;
    };
    readonly backColor: {
        readonly primary: string;
        readonly active: string;
        readonly emphasize: string;
        readonly disabled: string;
        readonly palette: string[];
    };
    readonly borderColor: {
        readonly primary: string;
        readonly secondary: string;
        readonly focus: string;
        readonly active: string;
    };
    readonly textColor: {
        readonly primary: string;
        readonly secondary: string;
        readonly emphasize: string;
        readonly warning: string;
        readonly error: string;
        readonly action: string;
    };
};

export type BarkThemeMode = "light" | "dark";

export type BarkTheme = {

    readonly light: BarkThemeProfile;
    readonly dark: BarkThemeProfile;
};

export type BarkThemeObject<Type extends keyof Omit<BarkTheme, "global">> =
    Record<keyof Required<BarkTheme[Type]>, string>;

export type BarkThemeProps<
    Rest extends Record<string, any> = {},
    Extra extends Record<string, any> = {},
> = {

    readonly theme: BarkThemeProfile;
} & Rest & Extra;
