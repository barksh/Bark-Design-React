/**
 * @author WMXPY
 * @namespace Components_GlobalStyle_Styles
 * @description Code
 */

import { createGlobalStyle } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

// spell-checker: disable
export const GlobalStyleCode = createGlobalStyle`
    pre, code {
        font-family: 'Fira Code', monospace;
        background-color: ${(props: BarkThemeProps) => {
        return props.theme.backColor.emphasize;
    }};
    }
    code {
        padding: 1px 5px;
        border-radius: 2px;
        border: 1px solid ${(props: BarkThemeProps) => {
        return props.theme.borderColor.primary;
    }};
    }
    pre {
        padding: 8px;
        border: 1px solid ${(props: BarkThemeProps) => {
        return props.theme.borderColor.primary;
    }};
        border-radius: 0px;
        border-right: 4px solid ${(props: BarkThemeProps) => {
        return props.theme.borderColor.primary;
    }};
    }
    code[data-lang] {
        display: inline-block;
    }
    pre code {
        border: 0px;
        border-radius: 0px;
    }
    pre code::before {
        text-transform: uppercase;
        content: attr(data-lang);
        position: sticky;
        left: 0;
        top: 0;
        display: block;
        text-align: left;
        color: ${(props: BarkThemeProps) => {
        return props.theme.textColor.secondary;
    }};
    }
`;
