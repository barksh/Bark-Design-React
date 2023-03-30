/**
 * @author WMXPY
 * @namespace Components_ProgressBar_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";

export const ProgressBarStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        ${parseLogicalCSSProperty("width")}: fit-content;
        ${parseLogicalCSSProperty("height")}: fit-content;
        display: flex;
        flex-direction: column;
`;
