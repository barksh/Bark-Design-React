/**
 * @author WMXPY
 * @namespace Components_Modal_Styles
 * @description Styled Content
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";

export const ModalStyledContent: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        ${parseLogicalCSSProperty("width")}: fit-content;
        ${parseLogicalCSSProperty("height")}: fit-content;
        pointer-events: auto;
`;
