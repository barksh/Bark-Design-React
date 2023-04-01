/**
 * @author WMXPY
 * @namespace Components_GlobalStyle_Styles
 * @description Link
 */

import { createGlobalStyle } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const GlobalStyleLink = createGlobalStyle`
    a {
        color: ${(props: BarkThemeProps) => {
        return props.theme.textColor.action;
    }};
    }
    a:visited {
        color: ${(props: BarkThemeProps) => {
        return props.theme.textColor.action;
    }};
    }
    a:hover {
        color: ${(props: BarkThemeProps) => {
        return props.theme.textColor.primary;
    }};
    }
    a:active {
        color: ${(props: BarkThemeProps) => {
        return props.theme.textColor.primary;
    }};
    }
    a:focus & {
        outline: 1px dashed ${(props: BarkThemeProps) => {
        return props.theme.borderColor.active;
    }};
    }
`;
