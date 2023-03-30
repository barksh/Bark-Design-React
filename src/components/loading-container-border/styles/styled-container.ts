/**
 * @author WMXPY
 * @namespace Components_LoadingContainerBorder_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";

export const LoadingContainerBorderStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        ${parseLogicalCSSProperty("width")}: 100%;
        ${parseLogicalCSSProperty("height")}: 100%;
        position: relative;
        overflow: hidden;
`;
