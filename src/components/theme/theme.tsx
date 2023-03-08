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

const defaultTheme: BarkTheme = combineBarkDefaultTheme();

export type ThemeProps =
    & {
    }
    & PropsChildrenAddOn;

export const Theme: React.FC<ThemeProps> = (props: ThemeProps) => {

    return (<ThemeProvider
        theme={defaultTheme}
    >
        {props.children}
    </ThemeProvider>);
};
