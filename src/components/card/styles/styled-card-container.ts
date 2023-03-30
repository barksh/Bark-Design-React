/**
 * @author WMXPY
 * @namespace Components_Card_Styles
 * @description Styled Card Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";

export const CardStyledCardContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        flex-direction: column;
        ${parseLogicalCSSProperty("width")}: 100%;
        ${parseLogicalCSSProperty("height")}: 100%;
`;
