/**
 * @author WMXPY
 * @namespace Components_GlobalStyle_Styles
 * @description Scroll Bar
 */

import { createGlobalStyle } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const GlobalStyleScrollBar = createGlobalStyle`
    * {
        scrollbar-width: thin;
        scrollbar-color: ${(props: BarkThemeProps) => {
        return props.theme.borderColor.primary;
    }} ${(props: BarkThemeProps) => {
        return props.theme.backColor.emphasize;
    }};
    }
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${(props: BarkThemeProps) => {
        return props.theme.borderColor.primary;
    }};
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: ${(props: BarkThemeProps) => {
        return props.theme.borderColor.focus;
    }};
    }
    ::-webkit-scrollbar-track {
        background-color: ${(props: BarkThemeProps) => {
        return props.theme.backColor.emphasize;
    }};
    }
`;
