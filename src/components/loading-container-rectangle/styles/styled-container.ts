/**
 * @author WMXPY
 * @namespace Components_LoadingContainerRectangle_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";

export const LoadingContainerRectangleStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        ${parseLogicalCSSProperty("width")}: 100%;
        ${parseLogicalCSSProperty("height")}: 100%;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`;
