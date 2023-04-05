/**
 * @author WMXPY
 * @namespace Components_GlobalStyle_Styles
 * @description Full Height
 */

import { createGlobalStyle } from "styled-components";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";

export const GlobalStyleFullHeight = createGlobalStyle`
    html, body, #root {
        ${parseLogicalCSSProperty("min-height")}: 100%;
    }
    html {
        display: flex;
    }
    body {
        flex: 1;
        align-self: center;
    }
`;
