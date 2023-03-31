/**
 * @author WMXPY
 * @namespace Components_Code_Styles
 * @description Styled Button Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";

export const CodeStyledButtonContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        position: absolute;
        ${parseLogicalCSSProperty("top")}: 4px;
        ${parseLogicalCSSProperty("right")}: 4px;
`;
