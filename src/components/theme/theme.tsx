/**
 * @author WMXPY
 * @namespace Components_Theme
 * @description Theme
 */

import * as React from "react";
import { ThemeProvider } from "styled-components";
import { BarkTheme } from "../../theme/declare";
import { combineBarkDefaultTheme } from "../../theme/default";
import { PropsChildrenAddOn } from "../../util/props";

export type ThemeProps =
    & {
        readonly theme?: BarkTheme;
    }
    & PropsChildrenAddOn;

export const Theme: React.FC<ThemeProps> = (props: ThemeProps) => {

    const theme: BarkTheme = combineBarkDefaultTheme(props.theme);

    return (<ThemeProvider
        theme={theme}
    >
        {props.children}
    </ThemeProvider>);
};
