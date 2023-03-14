/**
 * @author WMXPY
 * @namespace Components_Theme
 * @description Theme
 */

import * as React from "react";
import { ThemeProvider } from "styled-components";
import { BarkTheme, BarkThemeProfile } from "../../theme/declare";
import { getBarkThemeProfile } from "../../theme/default";
import { PropsChildrenAddOn } from "../../util/props";
import { GlobalStyle } from "../global-style/global-style";

export type ThemeProps =
    & {
        readonly theme?: Partial<BarkTheme>;
    }
    & PropsChildrenAddOn;

export const Theme: React.FC<ThemeProps> = (props: ThemeProps) => {

    const theme: BarkThemeProfile = getBarkThemeProfile(props.theme);

    return (<ThemeProvider
        theme={theme}
    >
        <GlobalStyle />
        {props.children}
    </ThemeProvider>);
};
