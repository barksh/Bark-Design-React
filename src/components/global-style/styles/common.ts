/**
 * @author WMXPY
 * @namespace Components_GlobalStyle_Styles
 * @description Common
 */

import { createGlobalStyle } from "styled-components";

// spell-checker: disable
export const GlobalStyleCommon = createGlobalStyle`
    * {
        box-sizing: border-box;
        outline: none;
        font-family: 'Verdana', 'Roboto', sans-serif;
    }
    body {
        margin: 0;
        padding: 0;
        position: relative;
    }
`;
