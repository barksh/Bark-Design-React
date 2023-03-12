/**
 * @author WMXPY
 * @namespace Theme
 * @description Declare
 */

export enum BARK_THEME_VARIANT {

    PRIMARY = "primary",
    SECONDARY = "SECONDARY",
}

export type BarkThemeVariantObject = Record<BARK_THEME_VARIANT, string>;

export type ThemeProfile = {

    readonly foreColor: BarkThemeVariantObject;
    readonly backColor: BarkThemeVariantObject;
    readonly borderColor: BarkThemeVariantObject;
    readonly textColor: BarkThemeVariantObject;
};

export type BarkTheme = {

    readonly global: ThemeProfile;
    readonly button?: Partial<ThemeProfile>;
};

export type BarkThemeObject<Type extends keyof Omit<BarkTheme, "global">> =
    Record<keyof Required<BarkTheme[Type]>, string>;

export type BarkThemeProps<Rest extends Record<string, any> = {}> = {

    readonly theme: BarkTheme;
} & Rest;
