/**
 * @author WMXPY
 * @namespace Components_LeadingDynamic_Styles
 * @description Styled Content Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { LeadingDynamicProps } from "../declare";

export const LeadingDynamicStyledContentContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        transition: 0.3s opacity ease-in-out;
        ${parseLogicalCSSProperty("width")}: 100%;
        ${parseLogicalCSSProperty("height")}: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        opacity: ${(props: BarkThemeProps<LeadingDynamicProps>) => {
            if (props.loading) {
                return 0;
            }
            return 1;
        }};
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.primary;
        }};
`;
