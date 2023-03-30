/**
 * @author WMXPY
 * @namespace Components_LeadingStatic_Styles
 * @description Styled Content Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";

export const LeadingStaticStyledContentContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        ${parseLogicalCSSProperty("width")}: 100%;
        ${parseLogicalCSSProperty("height")}: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.primary;
        }};
`;
