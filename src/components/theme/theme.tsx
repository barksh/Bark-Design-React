/**
 * @author WMXPY
 * @namespace Components_Theme
 * @description Theme
 */

import * as React from "react";
import { ThemeProvider } from "styled-components";
import { useThemeDetector } from "../../hooks/theme/use-theme-detector";
import { BarkTheme, BarkThemeMode, BarkThemeProfile } from "../../theme/declare";
import { getBarkThemeProfile } from "../../theme/default";
import { PropsChildrenAddOn } from "../../util/props";
import { GlobalStyle } from "../global-style/global-style";

export type ThemeProps =
    & {
        readonly theme?: Partial<BarkTheme>;
    }
    & PropsChildrenAddOn;

export const Theme: React.FC<ThemeProps> = (props: ThemeProps) => {

    const themeMode: BarkThemeMode = useThemeDetector();
    const theme: BarkThemeProfile = getBarkThemeProfile(themeMode, props.theme);

    return (<ThemeProvider
        theme={theme}
    >
        <GlobalStyle />
        {props.children}
    </ThemeProvider>);
};
